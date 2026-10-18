"""Unified data pipeline — regenerate all game data from the XLSX workbook.

Usage:
    python update_data.py          # run all parsers
    python update_data.py --skill  # skill parser only (PowerShell)
    python update_data.py --skip-skill  # everything except skill parser

Requires: openpyxl, pandas (for equipment parser).
The skill parser uses PowerShell and requires the XLSX workbook.
"""

from __future__ import annotations

import importlib
import shutil
import subprocess
import sys
import time
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

ROOT = Path(__file__).resolve().parent
WORKBOOK = ROOT / "Octopath traveler 0 database .xlsx"

# Python parsers — each must expose a no-arg main() function.
PYTHON_PARSERS = [
    ("characterData", "parse_character_data"),
    ("equipmentData", "parse_equipment_data"),
    ("enemyData", "parse_enemy_data"),
    ("shopData", "parse_shop_data"),
    ("npcData", "parse_npc_data"),
    ("masterySourceData", "parse_mastery_sources"),
]

SKILL_PS1 = ROOT / "parse_skill_data.ps1"


def run_python_parser(label: str, module_name: str) -> bool:
    """Import and call a parser's main(). Returns True on success."""
    start = time.time()
    try:
        mod = importlib.import_module(module_name)
        mod.main()
        elapsed = time.time() - start
        print(f"  ✓ {label} ({elapsed:.1f}s)")
        return True
    except Exception as exc:
        print(f"  ✗ {label} — {exc}")
        return False


def find_powershell_executable() -> str | None:
    """Find pwsh (PowerShell Core) or powershell (Windows PowerShell) on PATH."""
    return shutil.which("pwsh") or shutil.which("powershell")


def run_skill_parser() -> bool:
    """Run the PowerShell skill data parser via pwsh or powershell."""
    if not SKILL_PS1.exists():
        print(f"  ✗ skillData — {SKILL_PS1.name} not found")
        return False

    ps_bin = find_powershell_executable()
    if not ps_bin:
        print("  ✗ skillData — neither pwsh nor powershell found on PATH")
        return False

    start = time.time()
    try:
        result = subprocess.run(
            [ps_bin, "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", str(SKILL_PS1)],
            cwd=str(ROOT),
            capture_output=True,
            text=True,
            timeout=120,
        )
        elapsed = time.time() - start
        if result.returncode == 0:
            # Print parser's own output (total skills, categories)
            for line in result.stdout.strip().splitlines():
                print(f"    {line}")
            print(f"  ✓ skillData ({elapsed:.1f}s)")
            return True
        else:
            print(f"  ✗ skillData — {Path(ps_bin).stem} exited with code {result.returncode}")
            if result.stderr:
                for line in result.stderr.strip().splitlines()[:5]:
                    print(f"    {line}")
            return False
    except FileNotFoundError:
        print(f"  ✗ skillData — {ps_bin} not found on PATH")
        return False
    except subprocess.TimeoutExpired:
        print("  ✗ skillData — timed out after 120s")
        return False


def main() -> None:
    if not WORKBOOK.exists():
        print(f"Workbook not found: {WORKBOOK.name}")
        print("Place the XLSX workbook in the project root and re-run.")
        sys.exit(1)

    skip_skill = "--skip-skill" in sys.argv
    skill_only = "--skill" in sys.argv

    print(f"Workbook: {WORKBOOK.name}")
    print()

    results: list[bool] = []

    if not skill_only:
        for label, module_name in PYTHON_PARSERS:
            results.append(run_python_parser(label, module_name))

    if not skip_skill:
        results.append(run_skill_parser())

    print()
    passed = sum(results)
    total = len(results)
    if passed == total:
        print(f"All {total} parsers succeeded. Data files updated.")
    else:
        print(f"{passed}/{total} parsers succeeded.")
        sys.exit(1)


if __name__ == "__main__":
    main()
