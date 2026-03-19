---
title: "Automated EMR Reporting Pipeline"
description: "AWS EC2 pipeline that delivers daily patient lab notes directly into three major EMR systems, eliminating 5–10 FTEs of manual data entry."
tags: ["Python", "AWS EC2", "HL7", "PCC", "MatrixCare", "SigmaCare", "Automation"]
image: "/images/projects/emr-reporting-pipeline/cover.png"
featured: true
category: "HealthTech / Bioinformatics"
date: 2024-06-01
---

## Overview

Clinical lab data doesn't automatically reach the care team — someone has to get it there. At Simple Laboratories, that "someone" was a pipeline I built on AWS EC2 that runs daily, parses lab results, and pushes structured patient notes directly into three different Electronic Medical Record systems: PointClickCare, MatrixCare, and SigmaCare.

Before this existed, the process required manual export, reformatting, and upload by staff every single day. The pipeline eliminated 5–10 FTEs worth of daily labor and reduced the error surface to near zero.

## The Problem

Post-acquisition, Simple Laboratories was serving long-term care facilities whose EMRs all had different integration models:

- **PointClickCare** — REST API with OAuth, proprietary data format
- **MatrixCare** — SFTP-based HL7 v2 delivery
- **SigmaCare** — Webhook + JSON payload

Each required its own authentication scheme, message format, retry logic, and compliance handling for PHI under HIPAA.

## What I Built

- A Python-based orchestration service running on AWS EC2 that queries the LIS daily for finalized lab results
- Per-EMR adapters that normalize results into the required format (HL7 2.x, REST payloads, or SFTP drops)
- Retry and dead-letter queue logic to handle transient failures without data loss
- Audit logging for every delivery event — patient ID, result type, timestamp, destination, and status — to satisfy HIPAA compliance requirements
- Alerting via email when a batch fails so the clinical team can intervene before the care gap becomes a patient safety issue

## Results

- **5–10 FTEs** of daily manual work eliminated
- Lab results reach care facilities within minutes of finalization rather than hours or the next day
- Zero PHI exposure incidents since deployment
- Handles hundreds of patients per day across multiple facilities

## Stack

Python · AWS EC2 · HL7 v2 · REST APIs · SFTP · MySQL · Cron · HIPAA-compliant logging
