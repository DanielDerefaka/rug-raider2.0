"use client";

import React from "react";
import {
  ArrowUpRight,
  Clock,
  DollarSign,
  MoreHorizontal,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWallet } from "@solana/wallet-adapter-react";
import { TokenList } from "@/components/token/TokenList";
import { TokenReportComponent } from "@/components/token/TokenReport";
import { InsiderGraph } from "@/components/visualization/InsiderGraph";
import { useWalletContext } from "@/context/WalletContext";
import { useTokenAnalysis } from "@/context/TokenAnalysisContext";
import {
  useTokenReport,
  useTokenInsiderGraph,
  useTrendingTokens,
  useNewTokens,
} from "@/hooks/useRugCheck";
import Link from "next/link";
import {
  AlertTriangle,
  ChevronRight,
  CircleCheck,
  Coins,
  LineChart,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const { publicKey } = useWallet();
  const { tokens, isLoadingTokens, riskSummary } = useWalletContext();
  const { selectedToken, setSelectedToken } = useTokenAnalysis();

  // Fetch token report if a token is selected
  const { data: tokenReport, isLoading: isLoadingReport } =
    useTokenReport(selectedToken);

  // Fetch token insider graph if a token is selected
  const { data: insiderGraph, isLoading: isLoadingGraph } =
    useTokenInsiderGraph(selectedToken);

  // Fetch trending and new tokens
  const { data: trendingTokens = [], isLoading: isLoadingTrending } =
    useTrendingTokens(5);
  const { data: newTokens = [], isLoading: isLoadingNew } = useNewTokens(5);

  // Handle token selection
  const handleSelectToken = (address: string) => {
    setSelectedToken(address);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 relative">
        <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b font-semibold">
          Dashboard
        </h1>
      </div>
      <div className="flex flex-col gap-4 p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="dark:bg-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Wallet Tokens
              </CardTitle>
              <Button variant="ghost" size="icon" className="h-4 w-4">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <p></p>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <div className="text-2xl font-bold">
                  {riskSummary.totalTokens}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">tokens available </p>
              <div className="mt-4">
                <div className="flex space-x-2">
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 text-green-700 dark:text-green-500 border-green-200 dark:border-green-900/50"
                  >
                    {riskSummary.lowRiskCount} Low
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-amber-500/10 text-amber-700 dark:text-amber-500 border-amber-200 dark:border-amber-900/50"
                  >
                    {riskSummary.mediumRiskCount} Med
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-red-500/10 text-red-700 dark:text-red-500 border-red-200 dark:border-red-900/50"
                  >
                    {riskSummary.highRiskCount} High
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="dark:bg-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Wallet Security
              </CardTitle>
              <Button variant="ghost" size="icon" className="h-4 w-4">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div
                  className={`text-2xl font-bold ${
                    riskSummary.highRiskCount > 0
                      ? "text-red-600 dark:text-red-500"
                      : "text-green-600 dark:text-green-500"
                  }`}
                >
                  {" "}
                  {riskSummary.highRiskCount > 0 ? "At Risk" : "Good"}{" "}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {riskSummary.highRiskCount > 0 ? (
                  <div className="flex items-center text-sm text-red-600 dark:text-red-500">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {riskSummary.highRiskCount} high risk tokens detected
                  </div>
                ) : (
                  <div className="flex items-center text-sm text-green-600 dark:text-green-500">
                    <CircleCheck className="h-4 w-4 mr-1" />
                    No high risk tokens detected
                  </div>
                )}
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Tokens</CardTitle>
              <Button variant="ghost" size="icon" className="h-4 w-4">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{newTokens.length}</div>
              <p className="text-xs text-muted-foreground">
                <Link
                  href="/tokens"
                  className="text-sm text-primary hover:underline flex items-center"
                >
                  View latest tokens
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Number of members
              </CardTitle>
              <Button variant="ghost" size="icon" className="h-4 w-4">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div className="text-2xl font-bold">2 </div>
              </div>
              <p className="text-xs text-muted-foreground">members</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card className="mb-6 dark:bg-black">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-foreground">Your Tokens</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                {!publicKey ? (
                  <div className="text-center py-8">
                    <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <Coins className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Connect your wallet to view your tokens
                    </p>
                    <Button>Connect Wallet</Button>
                  </div>
                ) : (
                  <TokenList
                    tokens={tokens}
                    isLoading={isLoadingTokens}
                    onSelectToken={handleSelectToken}
                    selectedToken={selectedToken}
                    emptyMessage="No tokens found in your wallet"
                  />
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
          {selectedToken ? (
            <>
              {/* Token report */}
              <Card className="mb-6 dark:bg-black">
                <CardHeader className="pb-3 border-b border-border/40">
                  <CardTitle className="flex items-center text-foreground">
                    <Search className="h-5 w-5 mr-2 text-primary" />
                    Token Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {isLoadingReport ? (
                    <div className="space-y-4 animate-pulse">
                      <div className="h-10 bg-muted rounded w-3/4"></div>
                      <div className="h-40 bg-muted rounded"></div>
                      <div className="h-20 bg-muted rounded"></div>
                    </div>
                  ) : tokenReport ? (
                    <TokenReportComponent report={tokenReport} />
                  ) : (
                    <div className="text-center py-8">
                      <div className="bg-red-500/10 dark:bg-red-500/20 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                        <AlertTriangle className="h-8 w-8 text-red-500" />
                      </div>
                      <p className="text-muted-foreground">Failed to load token report</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Insider graph */}
              {insiderGraph && insiderGraph.nodes.length > 0 && (
                <Card>
                  <CardHeader className="pb-3 border-b border-border/40">
                    <CardTitle className="flex items-center text-foreground">
                      <LineChart className="h-5 w-5 mr-2 text-primary" />
                      Token Transaction Graph
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 bg-muted/50 rounded-b-lg">
                    {isLoadingGraph ? (
                      <div className="h-[400px] flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                      </div>
                    ) : (
                      <InsiderGraph data={insiderGraph} width={600} height={400} />
                    )}
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <Card className="dark:bg-black">
              <CardContent className="p-0">
                <div className="text-center py-16">
                  <div className="bg-primary/10 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center mb-4">
                    <Search className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-foreground">No Token Selected</h3>
                  <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                    Select a token from your wallet or trending list to view detailed analysis and risk assessment
                  </p>
                  <div className="mt-6">
                    <Link href="/dashboard/risk-checker">
                      <Button>Check a specific token</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
