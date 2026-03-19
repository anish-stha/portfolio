---
title: "COVID Appeals Automation Engine"
description: "Automated processing of 66,000 COVID insurance appeals in a single month, protecting $20M in potential revenue and collapsing a six-month manual backlog into weeks."
tags: ["Python", "Databricks", "PySpark", "RCM", "Automation", "Healthcare"]
image: "/images/projects/covid-appeals-automation/cover.png"
featured: true
category: "Data Engineering"
date: 2023-09-01
---

## Overview

Healthcare labs were left holding enormous COVID-era billing backlogs when insurers began denying claims en masse. At Lifescan Health, I led the engineering effort that turned what the RCM team estimated as a six-month manual project into a weeks-long automated run — and protected $20 million in potential revenue in the process.

## The Problem

Insurers issued retroactive denials on tens of thousands of COVID test claims. Each appeal required:

1. Pulling the original claim data from multiple billing platforms
2. Cross-referencing patient records and test results
3. Generating a compliant appeal document
4. Submitting it through the insurer's portal or clearinghouse

The RCM department had no automated tooling for this. At the rate staff could work manually, clearing the 66,000-claim backlog would take six months minimum — by which time many appeals would have aged out and the revenue would be unrecoverable.

## What I Built

- A Python-based extraction layer that pulled claim data from external billing platforms and Databricks, normalizing across inconsistent schemas from multiple payers
- A PySpark pipeline to validate, enrich, and deduplicate appeal records at scale
- A document generation module that produced payer-compliant appeal packages (CMS-1500 format and custom payer formats)
- A submission engine handling batch uploads and portal automation for major payers
- A tracking dashboard so the RCM team could monitor appeal status, approval rates, and remaining backlog in real time

## Results

- **66,000 appeals** processed in under a month
- **$20M** in potential revenue protected from statute-of-limitations expiry
- RCM team staffing need reduced by **50%** during and after the campaign
- Processing time for individual appeals dropped from **5 days → 2 hours**

## Stack

Python · PySpark · Databricks · SQL · CMS-1500 · REST APIs · Healthcare RCM
