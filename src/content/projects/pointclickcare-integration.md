---
title: "PointClickCare Technology Partner Integration"
description: "Spring Boot REST API server that earned PointClickCare technology partner certification — enabling HIPAA-compliant lab result delivery to long-term care facilities across PCC's network."
tags: ["Java", "Spring Boot", "MySQL", "REST API", "HL7", "HIPAA", "Swagger", "HealthTech"]
image: "/images/projects/pointclickcare-integration/cover.png"
featured: true
category: "HealthTech / Bioinformatics"
date: 2023-07-01
---

## Overview

PointClickCare is the dominant EHR platform for long-term and post-acute care in North America. Becoming a certified technology partner unlocks a lab's ability to deliver results directly into the PCC workflow — bypassing fax machines, manual uploads, and the transcription errors that come with them.

At Lifescan Health, I led the full certification effort: designing, building, and documenting the integration server from scratch, then working through PCC's technical review process to achieve partner status.

## What Certification Required

PCC's partner program demands:

- A production-grade REST API that conforms to their specific HL7-mapped result schema
- OAuth 2.0 authentication with token refresh and per-facility scoping
- Structured error handling with payer-compliant rejection codes
- Full API documentation (Swagger/OpenAPI) submitted for review
- End-to-end test suite validated against PCC's sandbox environment

## What I Built

- A **Spring Boot** server exposing REST endpoints for lab result submission, order retrieval, and patient ADT feed consumption
- **MySQL** schema designed for HIPAA-compliant PHI storage with audit tables tracking every read/write event
- Per-facility configuration model supporting hundreds of long-term care clients with different PCC account structures
- **Swagger UI** documentation covering all endpoints, request/response schemas, error codes, and authentication flows — used both for the certification submission and as ongoing developer reference
- Mirth Connect channels to handle the upstream HL7 translation from the LIS before results reach the Spring Boot layer

## Certification Outcome

Lifescan Health (later Simple Laboratories) became a certified PointClickCare technology partner — one of relatively few independent labs to achieve this. The integration runs in production, delivering results to long-term care facilities daily.

## Stack

Java · Spring Boot · MySQL · REST API · OAuth 2.0 · HL7 v2 · Swagger/OpenAPI · Mirth Connect · HIPAA
