import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <body>
        <header class="header">
            <h1>Dashboard de Vendas</h1>
        </header>
        <nav class="sidebar">
            <ul>
                <li><a href="#" class="active">Visão Geral</a></li>
                <li><a href="#">Vendas</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Configurações</a></li>
            </ul>
        </nav>
        <main class="main-content">
            <section class="overview">
                <h2>Visão Geral</h2>
                <div class="overview-card">
                    <h3>Total de Vendas</h3>
                    <p>R$ 50,000</p>
                </div>
                <div class="overview-card">
                    <h3>Clientes Ativos</h3>
                    <p>350</p>
                </div>
                <div class="overview-card">
                    <h3>Produtos Vendidos</h3>
                    <p>1200</p>
                </div>
            </section>
            <section class="sales">
                <h2>Vendas</h2>
            </section>
            <section class="products">
                <h2>Produtos</h2>
                <ul class="product-list">
                    <div class="product">
                        <img src="product1.jpg" alt="Produto 1" />
                        <h4>Produto 1</h4>
                        <p>Descrição breve do produto.</p>
                        <p class="price">R$ 50</p>
                    </div>
                </ul>
            </section>
            <section class="customers">
                <h2>Clientes</h2>
                <ul class="customer-list">
                    <div class="customer">
                        <img src="customer1.jpg" alt="Cliente 1" />
                        <h4>Cliente 1</h4>
                        <p>Email: cliente1@example.com</p>
                        <p>Total de Compras: 5</p>
                    </div>
                </ul>
            </section>
            <section class="settings">
                <h2>Configurações</h2>
                <div class="settings-options">
                </div>
            </section>
        </main>
    </body>
  );
};

export default Dashboard;
