---
title: "Sarstedt Mk2 Lab Instrument Driver"
description: "Custom Java software for the Sarstedt Mk2 sample management machine — achieving sub-second latency and eliminating the equivalent of two full-time staff roles."
tags: ["Java", "HL7", "ASTM", "Serial Communication", "LIS", "Instrumentation"]
image: "/images/projects/sarstedt-instrumentation/cover.png"
featured: false
category: "HealthTech / Bioinformatics"
date: 2023-05-01
---

## Overview

Lab instruments don't come with plug-and-play software — especially when the Laboratory Information System they need to talk to is custom-built or uses non-standard interfaces. At Lifescan Health, the Sarstedt Mk2 sample management machine had no existing integration with the LIS. I wrote one from scratch.

## The Problem

Without software integration, lab staff had to manually transcribe sample IDs, test orders, and results between the instrument's display and the LIS. For a machine processing hundreds of samples per day, this was:

- Slow — staff had to be physically present at the machine
- Error-prone — manual transcription introduces transcription errors in a clinical setting where errors have patient safety implications
- Expensive — the manual workflow required two dedicated staff members

## What I Built

A Java application that interfaces directly with the Sarstedt Mk2 via its serial/RS-232 protocol, handling:

- **Bidirectional communication** — sending work orders (sample IDs + test codes) to the machine and receiving result messages back
- **ASTM ↔ HL7 translation** — the Mk2 speaks ASTM E1394; the LIS speaks HL7 v2. The driver handles full bidirectional translation between both message standards
- **Real-time result forwarding** — results are parsed, validated, and pushed to the LIS within 1 second of the instrument finalizing them
- **Error handling and alerting** — communication failures, unexpected message formats, and out-of-range flags trigger alerts to lab staff
- **Audit trail** — every message sent and received is logged with timestamp for QC and compliance purposes

## Results

- **< 1 second** latency from instrument result to LIS record
- **2 FTEs** of manual transcription work eliminated
- Zero transcription errors since deployment
- Instrument now operates largely unattended during off-peak hours

## Stack

Java · ASTM E1394 · HL7 v2 · RS-232 / Serial Communication · LIS Integration
