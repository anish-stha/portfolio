---
title: "Lab Analytics & Reporting Platform"
description: "Centralized Azure-based data platform unifying lab operations data across merged systems into live PowerBI dashboards used by clinical and executive leadership."
tags: ["Azure Data Factory", "Databricks", "PowerBI", "ETL", "SQL", "Python", "OpenAI"]
image: "/images/projects/lab-analytics-platform/cover.png"
featured: true
category: "Data Engineering"
date: 2024-08-01
---

## Overview

After the acquisition of Lifescan Health by Simple Laboratories, the combined organization was running two separate Laboratory Information Systems, three on-prem VM environments, and multiple disconnected reporting workflows built on ad hoc Excel files. Leadership had no single view of operations.

I designed and built the data platform that changed that — centralizing all lab data in Azure Databricks and surfacing it through PowerBI dashboards used daily by clinical directors and the executive team.

## Architecture

```
LIS Systems (2x)  →  Azure Data Factory  →  Azure Databricks
Billing Platform  →  ADF Pipelines       →  Delta Lake Tables
Mirth Connect     →                      →  PowerBI Dashboards
External APIs     →                      →  Ad-hoc Queries
```

Data flows from source systems through parameterized ADF pipelines into a layered Delta Lake architecture (raw → cleaned → aggregated), then into semantic models consumed by PowerBI.

## Dashboards Built

- **Order Volume** — daily/weekly LIS order counts by test type, facility, and payer
- **Turnaround Time (TAT)** — median and P95 TAT by test type, flagging SLA breaches in real time
- **High-Priority Order Tracker** — live view of STAT and critical-value orders across facilities
- **Service Utilization** — volume trends by client, enabling revenue forecasting and sales conversations
- **Performance Metrics** — QC pass rates, instrument uptime, and phlebotomy productivity

## Notable Feature: GPT-Powered HL7 Search

Integrated OpenAI's GPT API to build a reverse-search tool over historical HL7 messages. Lab staff can query in plain English ("find all CBC results for patient X from March") instead of writing HL7 segment queries. PHI handling was designed to comply with HIPAA — no patient data is transmitted to OpenAI; the model operates on de-identified structural metadata only.

## Results

- Replaced Excel-based ad hoc reports used by every department
- Executive team has same-day visibility into lab operations vs. weekly lag
- ADF pipelines process data from two LIS systems without duplication or schema conflicts

## Stack

Azure Data Factory · Azure Databricks · Delta Lake · PowerBI · Python · PySpark · OpenAI API · SQL · HIPAA-compliant architecture
