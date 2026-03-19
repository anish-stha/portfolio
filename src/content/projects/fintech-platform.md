---
title: "European Digital Currency Fintech Platform"
description: "Co-founded and built a React Native + ReactJS platform used by financial institutions in Germany and the Netherlands for government-backed digital currency transactions."
tags: ["React Native", "ReactJS", "Java", "Ethereum", "Solidity", "Docker", "Kademlia", "Fintech"]
image: "/images/projects/fintech-platform/cover.png"
featured: true
category: "Software Engineering"
date: 2020-06-01
---

## Overview

As a co-founder of Sireto Technology, I led the front-end and mobile development of a fintech platform adopted by financial institutions in Germany and the Netherlands for government-backed digital currency transactions. The platform handled real money movement in a regulated European context — which meant the engineering bar for correctness, uptime, and security was non-negotiable.

## What I Built

### Cross-Platform Client (ReactJS + React Native)

A single codebase serving both web and mobile clients — built in React Native for iOS/Android and ReactJS for the browser dashboard. The UI handled:

- Digital currency wallet management and transaction history
- Multi-step transfer flows with regulatory confirmation steps
- Real-time balance and transaction status feeds via WebSocket
- Localization for German and Dutch markets

### Microservices Architecture

Integrated a full microservices backend spanning:

- **Authentication** — JWT with refresh token rotation, 2FA
- **Payment Services** — transaction initiation, validation, settlement
- **Ethereum/Bitcoin Nodes** — on-chain transaction broadcasting and confirmation monitoring
- **Media Storage** — document uploads for KYC verification flows
- **Email/Messaging** — transactional notifications and compliance alerts

All services containerized with Docker; CI/CD via GitHub Actions with automated test gates before any production deploy.

### Distributed P2P Backend (Kademlia)

For node discovery within the network, I built a distributed P2P backend in Java implementing the **Kademlia DHT protocol** — the same algorithm underlying BitTorrent and Ethereum's devp2p layer. This enabled resilient peer discovery without a central coordinator.

### Smart Contract Layer

Developed reusable ERC-20 CRUD smart contracts in Solidity and integrated them with the Java backend. I also researched known Solidity vulnerability patterns (reentrancy, integer overflow, front-running) to harden contracts before deployment.

### Database Optimization

Designed the SQLite schema for the mobile client with normalization, strategic indexing, and a sync mechanism for offline-capable operation. Performance improved **250%** over the initial naive schema.

## Stack

ReactJS · React Native · Java · Solidity · Ethereum · ERC-20 · Kademlia DHT · Docker · CI/CD · SQLite · REST APIs
