---
title: "Post-Acquisition LIS & Infrastructure Integration"
description: "Full technical integration of two clinical lab systems following an M&A — consolidating HL7 infrastructure, five Mirth environments, and three on-prem VM clusters into a unified hybrid cloud architecture."
tags: ["Mirth Connect", "HL7", "Azure", "HIPAA", "Infrastructure", "Migration", "LIS"]
image: "/images/projects/lis-merger-integration/cover.png"
featured: true
category: "HealthTech / Bioinformatics"
date: 2024-03-01
---

## Overview

When Simple Laboratories acquired Lifescan Health, they inherited two separate Laboratory Information Systems, five independent Mirth Connect instances, three on-premises VM environments, and a data center that needed to move. I led the engineering side of the integration.

This was less a software project and more a systems surgery — the kind where touching the wrong thing at the wrong moment disrupts live patient care.

## Scope

### HL7 Messaging Standardization

The two labs had different HL7 implementations — different segment usage, different custom Z-segments, different encoding rules. I audited every active interface across both systems and standardized message formats to a single specification that satisfied:

- HIPAA requirements for PHI handling in transit
- Downstream system expectations (EMRs, billing platforms, reference labs)
- Both labs' LIS vendors' integration constraints

### Mirth Connect Consolidation

Five separate Mirth instances across the two orgs — each with its own channel configurations, transformer scripts, and deployment procedures. I consolidated them into two environments (Production and Dev/QA), rewrote and validated every JavaScript transformer with the lab director, and documented the full channel inventory for the first time.

### Hybrid Cloud Migration

Unified three on-premises VM environments into a hybrid architecture using Microsoft Azure (IaaS) and Summit Data Center in Chicago. This included a full data center migration from NetSource, Inc. — planned and executed without downtime to production interfaces.

## What Made This Hard

- All work had to happen without disrupting live clinical operations
- HL7 interfaces carry PHI; every change required compliance review
- Staff from two orgs had different conventions, tooling, and institutional knowledge
- The acquisition timeline was aggressive

## Results

- Single unified Mirth environment managing all lab interfaces
- HL7 messaging standardized across both legacy systems
- Infrastructure consolidated from three on-prem environments to one hybrid cloud architecture
- Full data center migration completed

## Stack

Mirth Connect · HL7 v2 · JavaScript · Microsoft Azure · VMware · Linux · HIPAA · SQL
