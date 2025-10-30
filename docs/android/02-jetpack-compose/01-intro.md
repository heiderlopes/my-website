---
id: intro-jetpack-compose
title: Introdução ao Jetpack Compose
sidebar_label: Introdução
description: Entenda o que é o Jetpack Compose, por que utilizá-lo e como ele simplifica o desenvolvimento de interfaces Android modernas.
tags:
  - Jetpack Compose
  - Android
  - UI Declarativa
---

# 🌿 Introdução ao Jetpack Compose

O **Jetpack Compose** é o toolkit moderno do Android para criação de **interfaces de usuário declarativas** usando **Kotlin**.  
Ele simplifica o desenvolvimento de UIs ao permitir que você descreva _o que mostrar_ na tela, e não _como desenhar_ cada elemento.

---

## 🚀 O que é o Jetpack Compose?

Compose é uma biblioteca criada pela equipe do Android que permite construir **interfaces reativas e modernas** com menos código, melhor performance e alta produtividade.

Com ele, você **dispensa o XML tradicional** e passa a descrever sua interface diretamente em código Kotlin.

### 🧩 Exemplo simples

```kotlin
@Composable
fun Saudacao(nome: String) {
    Text(text = "Olá, $nome!")
}

@Composable
fun TelaPrincipal() {
    Column(
        modifier = Modifier.padding(16.dp)
    ) {
        Saudacao("Heider")
        Button(onClick = { /* ação */ }) {
            Text("Clique aqui")
        }
    }
}

```
