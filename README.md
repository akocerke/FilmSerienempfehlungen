# FilmRausch

## Inhaltsverzeichnis

1. [Beschreibung](#beschreibung)
2. [Funktionen](#funktionen)
3. [Technologiestack](#technologiestack)

## Beschreibung
FilmRausch ist eine Webanwendung, die den Benutzern die neuesten Film- und Serienempfehlungen bietet. Sie integriert die TMDb-API, um umfassende Informationen über Filme und Serien abzurufen.

Zusätzlich zur Integration der TMDb-API verfügt FilmRausch über eine eigene MySQL-Datenbank, die es Benutzern ermöglicht, sich zu registrieren, sich einzuloggen und ihre Lieblingsfilme und -serien zu verwalten. Benutzer können Titel zu ihrer Favoritenliste hinzufügen und entfernen, um ihre individuellen Favoritenlist zu erstellen und zu pflegen.

Mit dieser umfassenden Funktionalität bietet FilmRausch eine intuitive Plattform für Film- und Serienliebhaber.

## Funktionen
- Anzeige der neuesten Film- und Serienempfehlungen
- Details zu einzelnen Filmen und Serien, einschließlich Besetzung, Handlung und Bewertungen
- Suchfunktion für gezielte Suche nach bestimmten Titeln
- Verwaltung der Favoriten (Filme und Serien) als eingeloggter Benutzer

## Technologiestack
- Frontend: FilmRausch verwendet **React.js** für die Benutzeroberfläche, was eine moderne und reaktionsschnelle Benutzererfahrung ermöglicht.
- Externe API: Die Anwendung integriert die **TMDb-API**, um umfassende Informationen über Filme und Serien abzurufen und personalisierte Empfehlungen zu generieren.
- Interne API: FilmRausch nutzt **Express** als Backend-Framework für die interne API, was eine robuste und effiziente Kommunikation zwischen Frontend und Datenbank ermöglicht.
- Datenbank: FilmRausch verwendet eine **MySQL-Datenbank** zur Speicherung von Benutzerinformationen sowie zur Verwaltung von Favoritenlisten. Die Datenbank unterstützt die folgenden Funktionen:

  - **Registrierung (Register):** Benutzer können sich in FilmRausch registrieren, wobei ihre Anmeldeinformationen sicher in der MySQL-Datenbank gespeichert werden.
  
  - **Anmeldung (Login):** Angemeldete Benutzer können sich bei FilmRausch anmelden, wobei ihre Anmeldeinformationen mit den Einträgen in der MySQL-Datenbank abgeglichen werden, um den Zugriff auf ihre Konten zu ermöglichen.

  - **Favoritenverwaltung:** Benutzer können Filme und Serien zu ihren Favoriten hinzufügen und entfernen. Diese Favoritenlisten werden in der MySQL-Datenbank gespeichert und sind mit den jeweiligen Benutzerkonten verknüpft, um eine personalisierte Erfahrung zu ermöglichen.
