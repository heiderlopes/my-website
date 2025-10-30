---
id: ludoon-jetpack-compose-story
title: Criando os stories
sidebar_label: Criando os stories
tags:
  - Android
  - Kotlin
  - Jetpack Compose
  - Android Studio
---

# Criando os stories

## 1 - Criando o modelo

Dentro da pasta **models** crie um arquivo chamado **Story** e adicione o seguinte código para representar um story no app.

```Kotlin
data class Story(
    val userNickName: String,
    val userAvatar: String
)
```

## 2 - Criando o repostório para retornar os stories.

Dentro da pasta **data/repository** crie um arquivo chamado **StoryRepository** e adicione o seguinte código para representar um story no app.

```Kotlin
val stories = listOf(
    Story("User ", "https://cdn-icons-png.flaticon.com/128/3557/3557991.png"),
    Story("User ", "https://cdn-icons-png.flaticon.com/128/3557/3557991.png"),
    Story("User ", "https://cdn-icons-png.flaticon.com/128/3557/3557991.png"),
    Story("User ", "https://cdn-icons-png.flaticon.com/128/3557/3557991.png"),
    Story("User ", "https://cdn-icons-png.flaticon.com/128/3557/3557991.png"),
    Story("User ", "https://cdn-icons-png.flaticon.com/128/3557/3557991.png"),
)
```

## 2. Adicionando o Coil

O Coil é uma biblioteca moderna de carregamento de imagens para Android, escrita em Kotlin, projetada para ser leve, rápida e fácil de usar, especialmente em Jetpack Compose.

Ela tem a mesma função que Glide ou Picasso, mas foi construída pensando nas tecnologias mais recentes do Android e aproveitando recursos do Kotlin.

### Principais características:

- **Kotlin-first:** Feita totalmente em Kotlin, aproveita corrotinas (suspend functions) e extensions do Kotlin.

- **Integração com Compose**: Possui AsyncImage e rememberAsyncImagePainter, que tornam fácil exibir imagens remotas diretamente em Composables.

- **Suporte a caching automático**: Armazena imagens em memória e disco para reduzir uso de rede e acelerar carregamentos.

- **Placeholders e tratamento de erro**: Permite definir imagens temporárias enquanto carrega ou caso ocorra erro.

- **Transformações de imagem**: Suporta redimensionamento, recorte circular, blur, rotação, entre outros.

- **Leve e rápido**: Menos dependências e footprint menor que Glide ou Picasso, ideal para apps modernos.

### Adicionando ao projeto

Abra o arquivo **build.gradle**. do módulo **app.**

Dentro de **dependencies** adicione:

```kotlin
dependencies {
    // ✅ Manter as demais dependências.
    implementation("io.coil-kt:coil-compose:2.5.0")
}
```

## 3. Permissão de Internet

Como as imagens serão carregadas a partir de uma URL é necessário adicionar o uso de internet no AndroidManifest.xml do aplicativo.

Abra o arquivo **AndroidManifest.xml** e adicione:

```Koltin
 <uses-permission android:name="android.permission.INTERNET"/>.
```

Por exemplo:

```Kotlin

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.INTERNET"/>

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.LudoOn">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:label="@string/app_name"
            android:theme="@style/Theme.LudoOn">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
```

## 4 - Criando o componente StoryItem

Agora crie o componente que irá renderizar um Story. Dentro da pasta **ui/components** crie um arquivo chamado \*_StoryItem_

```Kotlin
@Composable
fun StoryItem(story: Story) {
    Column(
        modifier = Modifier
            .padding(spacingSmall)
            .background(MaterialTheme.colorScheme.background)
    ) {

        AsyncImage(
            model = story.userAvatar,
            contentDescription = stringResource(
                R.string.story_content_description,
                story.userNickName
            ),
            modifier = Modifier
                .size(64.dp)
                .align(Alignment.CenterHorizontally)
                .fillMaxSize()
                .clip(CircleShape)
                .border(2.dp, StoryCircleColor, CircleShape),
            contentScale = ContentScale.Fit
            //placeholder = painterResource(R.drawable.placeholder), // opcional
            //error = painterResource(R.drawable.error) // opcional
        )

        Text(
            story.userNickName, modifier = Modifier
                .width(72.dp)
                .height(24.dp),
            style = MaterialTheme.typography.labelSmall,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
            textAlign = TextAlign.Center
        )
    }
}

@Preview
@Composable
fun StoryItemPreview(modifier: Modifier = Modifier) {
    StoryItem(Story("", ""))
}
```

## 5 - Criando o componente StoryList

Agora crie o componente que irá renderizar um Story. Dentro da pasta **ui/components** crie um arquivo chamado \*_StoryList_.

```Kotlin
@Composable
fun StoryList(stories: List<Story>) {

    LazyRow(modifier = Modifier.padding(top = spacingMedium)) {
        itemsIndexed(stories) { _, story ->
            StoryItem(story)
        }
    }

}
```

## 6 - Adicionando os stories na Home

Agora na HomeScreen adicione **StoryList(stories)**.

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
        ) {
            StoryList(stories)
        }
    }
}
```
