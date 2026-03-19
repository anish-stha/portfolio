---
title: "Kademlia Distributed P2P Network"
description: "A Java implementation of the Kademlia DHT protocol for resilient peer discovery in a financial transaction network — no central coordinator required."
tags: ["Java", "Kademlia", "DHT", "P2P", "Distributed Systems", "Networking"]
image: "/images/projects/kademlia-p2p/cover.png"
featured: false
category: "Software Engineering"
date: 2019-08-01
---

## Overview

At Sireto Technology, the fintech platform needed a way for network nodes to discover each other without relying on a central registry — a single point of failure that would be unacceptable in a financial transaction network. I implemented the **Kademlia Distributed Hash Table (DHT)** protocol in Java to solve this.

Kademlia is the algorithm underlying BitTorrent's distributed tracker and Ethereum's devp2p node discovery. It provides O(log n) peer lookup with high fault tolerance — nodes can join and leave freely, and the network heals itself.

## How Kademlia Works

Kademlia organizes nodes in a virtual XOR-metric space. Each node has a 160-bit ID; distance between nodes is computed as the XOR of their IDs. Each node maintains a routing table of k-buckets — lists of known peers at exponentially increasing distances.

To look up a peer, a node iteratively queries the closest known nodes to the target ID. Because of the XOR metric, each step halves the distance — lookup converges in O(log n) hops.

## What I Implemented

- **Node bootstrap** — joining the network by contacting a known seed node, then populating the routing table via iterative `FIND_NODE` RPCs
- **k-bucket management** — maintaining and refreshing buckets, evicting stale nodes, handling the "least-recently seen" eviction policy Kademlia uses for reliability
- **Core RPCs** over UDP: `PING`, `STORE`, `FIND_NODE`, `FIND_VALUE`
- **Iterative lookups** — alpha-parallel async lookup with per-round closest-set tracking
- **Network churn handling** — periodic bucket refresh and republish to keep routing tables accurate as nodes come and go

## Integration

The Kademlia layer was integrated into the broader fintech platform as the peer discovery backbone — nodes used it to find transaction validators and relay peers without a central broker.

## Stack

Java · UDP Sockets · Kademlia DHT · Distributed Systems · Concurrent Programming
