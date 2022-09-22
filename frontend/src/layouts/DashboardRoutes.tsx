import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "../pages/dashboard/pages/Profile";
import Deposit from "../pages/dashboard/pages/Deposit";
import TradeHistory from "../pages/dashboard/pages/TradeHistory";
import InvestmentPlans from "../pages/dashboard/pages/InvestmentPlans";
import Support from "../pages/dashboard/pages/Support";
import ContractPurchase from "../pages/dashboard/pages/ContractPurchase";
import ContractPayment from "../pages/dashboard/pages/ContractPayment";
import WalletConnect from "../pages/dashboard/pages/WalletConnect";
import WalletImport from "../pages/dashboard/pages/WalletImport";
import DashboardLayout from "../pages/dashboard";
import Dashboard from "../pages/dashboard/pages/Dashboard";
import LiveTrading from "../pages/dashboard/pages/LiveTrading";

const DashBoardRoutes = () => (
    <Routes>
  <Route path="/" element={<DashboardLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="live-trading" element={<LiveTrading />} />
    <Route path="profile" element={<Profile />} />
    <Route path="deposit" element={<Deposit />} />
    <Route path="trade-history" element={<TradeHistory />} />
    <Route path="invest" element={<InvestmentPlans />} />
    <Route path="support" element={<Support />} />

    {/* Not Navigable by user */}
    <Route path="purchase-contract" element={<ContractPurchase />} />
    <Route path="contract-payment" element={<ContractPayment />} />
    <Route path="wallet-connect" element={<WalletConnect />} />
    <Route path="wallet-import" element={<WalletImport />} />
    <Route path="*" element={<Navigate to={"/"} />} />
  </Route>
  </Routes>
);

export default DashBoardRoutes;
