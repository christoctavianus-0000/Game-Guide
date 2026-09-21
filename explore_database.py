"""
OCTOPATH TRAVELER 0 // DATABASE EXPLORER
Quick utility to inspect, analyze, and export any sheet from 'Octopath traveler 0 database .xlsx'
"""

import pandas as pd
import json
import os

EXCEL_FILE = "Octopath traveler 0 database .xlsx"

def list_all_sheets():
    """List all available sheets and their row/column dimensions."""
    print("Loading workbook sheet list...")
    xl = pd.ExcelFile(EXCEL_FILE)
    print(f"\nFound {len(xl.sheet_names)} sheets in '{EXCEL_FILE}':")
    for i, name in enumerate(xl.sheet_names, 1):
        print(f"  {i:2d}. {name}")
    return xl.sheet_names

def preview_sheet(sheet_name, n_rows=5):
    """Preview the first few rows of a specific sheet."""
    print(f"\n--- Previewing '{sheet_name}' (First {n_rows} rows) ---")
    df = pd.read_excel(EXCEL_FILE, sheet_name=sheet_name)
    print(f"Dimensions: {df.shape[0]} rows x {df.shape[1]} columns")
    print(df.head(n_rows))
    return df

if __name__ == "__main__":
    sheets = list_all_sheets()
    # Preview Characters sheet as an example
    if "Character" in sheets:
        preview_sheet("Character", 5)
