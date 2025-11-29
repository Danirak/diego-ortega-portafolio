<!-- markdownlint-disable MD033 MD036 MD041 MD045 MD046 -->
<div align="center">

<h1 style="border-bottom: none">
    <b><a href="https://danirak.github.io/diego-ortega-portafolio">Personal Portfolio - Developer</a></b>
</h1>

**`Personal Portfolio`** is a fully responsive personal developer portfolio single-page website, <br/>
responsive for all devices, built using **`React`**, **`TypeScript`**, **`Vite`**, and **`CSS`**.

![Made-with-react](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)
![Made-with-typescript](https://img.shields.io/badge/Made%20with-TypeScript-3178C6?logo=typescript)
[![Deploy](https://github.com/Danirak/diego-ortega-portafolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Danirak/diego-ortega-portafolio/actions/workflows/deploy.yml)
![GitHub repo size](https://img.shields.io/github/repo-size/Danirak/diego-ortega-portafolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![GitHub stars][github-stars]
![GitHub forks][github-forks]

</div>

---

<div align="center">

![Demo][demo]
**`Live Demo:`** 👉🏽 [danirak.github.io/diego-ortega-portafolio][devfolio]

</div>

## **How to make it yours?**

### Step 1

Fork this project and rename the repo to `your_github_username.github.io`.

> [!IMPORTANT]
> For example, if your GitHub username is `danirak`. Rename the repository to `danirak.github.io`

### Step 2

Enable GitHub Pages on:

`Repository(Settings) > Pages > Build and deployment > Source(GitHub Actions)`

### Step 3

Enable workflows:

`Repository(Actions) > I understand my workflows, go ahead and enable them`

### Step 4

Go to the `src/data/` folder and replace the default data with your personal information in the TypeScript files.

```bash
src/data
├── about.ts       # About section data
├── blog.ts        # Blog posts data
├── contact.ts     # Contact information
├── navbar.ts      # Navigation menu
├── profile.ts     # Profile/sidebar data
├── projects.ts    # Portfolio projects
├── resume.ts      # Education, experience, skills
└── index.ts       # Main config export
```

For example, to set your contact information, edit `src/data/profile.ts`.

```typescript
export const profileConfig: ProfileConfig = {
  USER: {
    role: "iOS Developer",
    name: "Richard Hendricks",
    username: "richardhendricks",
    avatar: "/config/assets/avatars/my-avatar.png"
  },
  INFO: [
    {
      label: "Email",
      value: "richard@example.com",
      icon: "mail-outline"
    },
    // ... more info
  ],
  // ... more config
};
```

> [!IMPORTANT]
> TypeScript provides type safety and autocompletion. Your IDE will help you understand the expected data structure for each field.

<br/>

> [!TIP]
> You can upload your images directly to the `config/assets` folder or use an image server like [Imgur][imgur]. Both options are valid for customizing your portfolio. For example:
>
> `avatar: "https://i.imgur.com/H5gx7JF.png"`
>
> `avatar: "/config/assets/avatars/my-avatar.png"`

### Step 5: Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Step 6: Enjoy 😉

Now you can visit your portfolio at `https://your_github_username.github.io`

Your personal portfolio will be built and updated automatically whenever any changes occur in the configuration files.

> [!NOTE]
> If you like my work and want to show some ❤️, please consider giving a ⭐️ to this Repository.

## Screenshots

![Desktop Demo][desktop-screenshot]
![Mobile Demo][mobile-screenshot]

## Contribute

Contributions are welcome.

## Facing any Issue?

Feel free to open an [Issue][issue] :)

## Contact

If you want to contact me you can reach me at [Discord][discord].

## Credits

This project is based on [vcard portfolio][vcard] and was migrated from Python/Jinja2 to React/TypeScript using Vite.

## License

MIT

[vcard]: https://github.com/codewithsadee/vcard-personal-portfolio
[devfolio]: https://danirak.github.io/diego-ortega-portafolio
[demo]: https://raw.githubusercontent.com/ivansaul/demos/master/python/personal-portfolio-demo.gif
[discord]: https://discord.com/users/744755977684779038
[issue]: https://github.com/Danirak/diego-ortega-portafolio/issues
[github-stars]: https://img.shields.io/github/stars/Danirak/diego-ortega-portafolio?style=social
[github-forks]: https://img.shields.io/github/forks/Danirak/diego-ortega-portafolio?style=social
[desktop-screenshot]: https://i.imgur.com/xKkMSwR.png
[mobile-screenshot]: https://i.imgur.com/G1A1nBu.png
[imgur]: https://imgur.com
