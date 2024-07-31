
# Gerenciador de Cursos - Aplicação Ionic/Angular

## Descrição

Este repositório contém uma aplicação desenvolvida utilizando o framework Ionic e Angular, destinada ao gerenciamento e visualização de informações sobre cursos. A aplicação é projetada para fornecer uma interface interativa e dinâmica para o usuário, permitindo a entrada e visualização de dados do curso de maneira eficiente.

## Funcionalidades

-   **Seleção de Local**: Interface para selecionar a localidade do curso de uma lista predefinida. As opções incluem "Fortec São Vicente", "Fortec Praia Grande", "Etec Ruth Cardoso" e "Etec Aristóteles".
    
-   **Entrada de Dados**: Formulário para inserção dos seguintes detalhes do curso:
    
    -   Duração
    -   Data de Início
    -   Nome do Curso
    -   Valor Mensal
-   **Exibição de Dados**: Após o envio, as informações inseridas são formatadas e exibidas em uma lista dinâmica.
    

## Estrutura do Projeto

### Componentes

-   **CursosPage**: Componente principal responsável pela interface do usuário e manipulação dos dados.
    -   **Template (HTML)**: Define a estrutura da interface, incluindo elementos de seleção e entrada.
    -   **Lógica (TypeScript)**: Gerencia a interação com os serviços, coleta e exibe os dados inseridos.

### Serviços

-   **CursoService**: Serviço central que integra e coordena a manipulação dos dados do curso com os seguintes serviços específicos:
    -   **DuracaoService**: Gerencia a duração do curso.
    -   **InicioService**: Gerencia a data de início do curso.
    -   **NomeService**: Gerencia o nome do curso.
    -   **ValorService**: Gerencia o valor mensal do curso.

### Testes

-   **DuracaoService, InicioService, NomeService, ValorService**: Incluem testes unitários para garantir a criação e funcionamento correto dos serviços.

## Instalação e Execução

1.  **Clone o Repositório**:

    `git clone https://github.com/GustavoBritodev/Cadastro-de-Cursos.git`
    
    `cd repositorio` 
    
2.  **Instale as Dependências**:
 
    `npm install` 
    
3.  **Inicie o Servidor de Desenvolvimento**:

    `ionic serve` 
    

## Tecnologias Utilizadas

-   **Ionic**: Framework para desenvolvimento de aplicações móveis híbridas.
-   **Angular**: Framework para construção de aplicações web dinâmicas.
-   **TypeScript**: Linguagem de programação utilizada para garantir maior robustez e tipagem estática.

--------------------
### By: Gustavo Brito

--------------------


# Course Manager - Ionic/Angular Application

## Description

This repository contains an application developed using the Ionic and Angular frameworks, designed for managing and viewing information about courses. The application is designed to provide an interactive and dynamic interface for users, allowing efficient input and display of course data.

## Features

-   **Location Selection**: Interface for selecting the course location from a predefined list. Options include "Fortec São Vicente", "Fortec Praia Grande", "Etec Ruth Cardoso", and "Etec Aristóteles".
    
-   **Data Entry**: Form for inputting the following course details:
    
    -   Duration
    -   Start Date
    -   Course Name
    -   Monthly Fee
-   **Data Display**: After submission, the entered information is formatted and displayed in a dynamic list.
    

## Project Structure

### Components

-   **CursosPage**: Main component responsible for the user interface and data handling.
    -   **Template (HTML)**: Defines the structure of the interface, including selection and input elements.
    -   **Logic (TypeScript)**: Manages interaction with services, collects, and displays the entered data.

### Services

-   **CursoService**: Central service that integrates and coordinates course data handling with the following specific services:
    -   **DuracaoService**: Manages the course duration.
    -   **InicioService**: Manages the course start date.
    -   **NomeService**: Manages the course name.
    -   **ValorService**: Manages the monthly fee of the course.

### Tests

-   **DuracaoService, InicioService, NomeService, ValorService**: Include unit tests to ensure the correct creation and operation of services.

## Installation and Running

1.  **Clone the Repository**:
    
    `git clone https://github.com/username/repository.git`
    
    `cd repository`
    
2.  **Install Dependencies**:
    
    `npm install`
    
3.  **Start the Development Server**:
    
    `ionic serve`
    

## Technologies Used

-   **Ionic**: Framework for developing hybrid mobile applications.
-   **Angular**: Framework for building dynamic web applications.
-   **TypeScript**: Programming language used to ensure greater robustness and static typing.

----------

### By: Gustavo Brito
