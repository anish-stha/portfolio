---
title: "Insurance Claims Bot Cluster"
description: "A 12-VM Selenium bot cluster processing ~1,000 insurance and billing claims per day, automating web portal interactions that cannot be reached via API."
tags: ["Python", "Selenium", "VM", "Automation", "Healthcare", "RCM"]
image: "/images/projects/insurance-claims-automation/cover.png"
featured: false
category: "Data Engineering"
date: 2024-05-01
---

## Overview

Not every insurance portal offers an API. Most major payers — Medicare, Medicaid, and commercial insurers — still require web portal access for certain claim types, eligibility checks, and prior authorizations. At Simple Laboratories, that meant staff manually logging into portals, clicking through multi-step forms, and downloading results one at a time.

I built a 12-VM Selenium cluster that does this automatically at scale.

## The Problem

The lab processes hundreds of claims per day across multiple payers. Each payer has its own portal, its own session management quirks, its own rate limits, and its own UI patterns. No single bot architecture works for all of them.

Manual processing was bottlenecked by headcount and prone to human error — wrong claim selected, field mis-entered, session timeout mid-submission.

## Architecture

- **12 EC2 / on-prem VMs** running headless Chrome + Selenium, one per payer or payer group
- **Central task queue** (Redis-backed) distributing claim jobs to available bots
- **Per-payer bot profiles** encapsulating login flow, navigation, form-fill logic, and result extraction
- **Session management layer** handling login state, 2FA prompts, CAPTCHA detection, and session refresh
- **Result normalization** converting downloaded data into a standard schema before writing to the claims database
- **Monitoring dashboard** showing bot health, queue depth, and daily throughput per payer

## Results

- **~1,000 claims processed per day** across all payers
- **~$3.5M in claim data** gathered to date
- Staff reassigned from portal work to exception handling and patient communication
- Error rate on claim submissions significantly reduced vs. manual process

## Stack

Python · Selenium · Redis · MySQL · Headless Chrome · Linux · Cron · Healthcare RCM
