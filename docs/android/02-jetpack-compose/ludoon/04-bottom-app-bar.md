---
id: ludoon-jetpack-compose-bottom-app-bar
title: Criando a BottomBar
sidebar_label: Criando a BottomBar
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Android Studio
---

# Criando a BottomBar

## 1 - Criando o component LudoOnBottomBar

Dentro da pasta **ui/components** crie um arquivo chamado **LudoOnBottomBar**.

```Kotlin
// Modelo dos itens da BottomBar
data class BottomBarItem(
    val label: String,
    val icon: ImageVector,
    val selectedIcon: ImageVector? = null,
)

@Composable
fun LudoOnBottomBar() {
    var selectedIndex by remember { mutableIntStateOf(0) }

    val items = listOf(
        BottomBarItem("Home", Icons.Outlined.Home, Icons.Filled.Home),
        BottomBarItem("Reels", Icons.Outlined.VideoLibrary),
        BottomBarItem("Shop", Icons.AutoMirrored.Outlined.Send),
        BottomBarItem("Search", Icons.Outlined.Search),
        BottomBarItem("Profile", Icons.Outlined.Person)
    )

    BottomAppBar(
        containerColor = MaterialTheme.colorScheme.background,
        tonalElevation = 0.dp
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .height(56.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            items.forEachIndexed { index, item ->
                Box(
                    modifier = Modifier
                        .weight(1f)
                        .clickable { selectedIndex = index },
                    contentAlignment = Alignment.Center
                ) {
                    BottomIcon(
                        icon = if (selectedIndex == index && item.selectedIcon != null)
                            item.selectedIcon
                        else
                            item.icon,
                        contentDesc = item.label,
                        isSelected = selectedIndex == index
                    )
                }
            }
        }
    }
}

@Composable
fun BottomIcon(
    icon: ImageVector,
    contentDesc: String,
    isSelected: Boolean
) {
    Icon(
        imageVector = icon,
        contentDescription = contentDesc,
        tint = if (isSelected) Color.Black else Color.Gray,
        modifier = Modifier.size(iconBottomBar)
    )
}

@Preview(showBackground = true)
@Composable
fun LudoOnBottomBarPreview() {
    Scaffold(
        bottomBar = { LudoOnBottomBar() }
    ) { innerPadding ->
        Text(
            text = "Conteúdo do feed aqui",
            modifier = Modifier.padding(innerPadding)
        )
    }
}

```

## 2 - Utilizando o componente

No Scaffold da **HomeScreen** adicione a **LudoOnTopBar.**

```Kotlin
@Composable
fun HomeScreen() {
    Scaffold(
        topBar = { LudoOnTopBar() },
        bottomBar = { LudoOnBottomBar() },
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
