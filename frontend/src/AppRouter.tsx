import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCliente from './pages/Cadastro/CadastroCliente';
import CadastroProfissional from './pages/Cadastro/CadastroProfissional';
import PerfilProfissional from './pages/PerfilProfissional';
import Login from './pages/Login/LoginClient';
import LoginProfissional from './pages/Login/LoginProfissional';
import BuscarProfissionais from './pages/BuscaProfissionais';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Header } from './components/Header/Header';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroCliente />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profissional/login" element={<LoginProfissional />} />
        <Route path="/profissional/cadastro" element={<CadastroProfissional />} />
        <Route path="/profissional/perfil/:id" element={<PerfilProfissional />} />
        <Route path="/buscar" element={<BuscarProfissionais />} />
      </Routes>
    </BrowserRouter>
  );
};
