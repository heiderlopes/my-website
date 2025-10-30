---
id: ludoon-jetpack-compose-top-app-bar
title: Criando a TopAppBar
sidebar_label: Criando a TopAppBar
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Android Studio
---

# Criando a TopAppBar

## 1 - Criando o component AppLogo

Dentro da pasta **ui/components** crie um arquivo chamado **AppLogo**.

```Kotlin
@Composable
fun AppLogo() {
    Text(
        text = stringResource(R.string.app_name),
        style = TextStyle(
            fontSize = fontXXLarge,
            fontWeight = FontWeight.Bold,
            fontFamily = FontFamily(Font(R.font.billabong))
        ),
    )
}

@Preview(showBackground = true)
@Composable
fun AppLogoPreview(modifier: Modifier = Modifier) {
    AppLogo()
}
```

> **Observação:** A vantagem de se criar como componente é que as mudanças ficam centralizadas facilitando a manutenção do código.

## 2 - Criando o component LudoOnTopBar

Dentro da pasta **ui/components** crie um arquivo chamado **LudoOnTopBar**.

```Kotlin
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LudoOnTopBar(
    modifier: Modifier = Modifier,
    onAddClick: () -> Unit = {},
    onLikeClick: () -> Unit = {},
    addIcon: ImageVector = Icons.Filled.Add,
    likeIcon: ImageVector = Icons.Filled.FavoriteBorder,
) {
    val colors = TopAppBarDefaults.topAppBarColors(
        containerColor = MaterialTheme.colorScheme.background
    )

    TopAppBar(
        modifier = modifier,
        colors = colors,
        title = { AppLogo() },
        actions = {
            IconButton(onClick = onAddClick) {
                Icon(
                    imageVector = addIcon,
                    contentDescription = "Add",
                    modifier = Modifier.size(iconTopBar)
                )
            }

            IconButton(onClick = onLikeClick) {
                Icon(
                    imageVector = likeIcon,
                    contentDescription = "Likes",
                    modifier = Modifier.size(iconTopBar)
                )
            }
        }
    )
}
```

## 3 - Adicionando a AppTopBar na HomeScreen

Dentro da pasta **ui/screens** adicione **topBar** ao Scaffold.

```Kotlin
@Composable
fun HomeScreen() {
    Scaffold(
        topBar = { LudoOnTopBar() },
        modifier = Modifier.background(MaterialTheme.colorScheme.background)
    ) { padding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding),
            contentAlignment = Alignment.Center
        ) {
            Text(text = "Feed aqui")
        }
    }
}
```
