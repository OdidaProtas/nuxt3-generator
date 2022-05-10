import * as fs from "fs"

function createProject(id, name) {
    fs.mkdir(`${id}`, (err) => {
        if (!err) {
            createApp(id, name)
        }
    })
}

function createApp(id, name) {
    fs.mkdir(`./${id}/${name}`, (serr) => {
        if (!serr) {
            createTsConsfig(id, name)
        }
    })
}

function createTsConsfig(id, name) {
    fs.writeFile(`./${id}/${name}/tsconfig.json`, `
{
    // https://v3.nuxtjs.org/concepts/typescript
    "extends": "./.nuxt/tsconfig.json"
} 
    `, (err) => {
        if (!err) {
            createReadMe(id, name)
        }
    })
}


function createReadMe(id, name) {
    fs.writeFile(`./${id}/${name}/README.md`, `

# ${name} Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.
    
## Setup
    
Make sure to install the dependencies:
    
\`\`\`bash
        
# yarn 
yarn install

# npm 
npm install

# pnpm 
pnpm install--shamefully - hoist \`\`\`

## Development Server

Start the development server on http: //localhost:3000

\`\`\`bash 
npm run dev 
\`\`\`

## Production

Build the application
for production:

\`\`\`bash 
npm run build 
\`\`\`

Locally preview production build:

\`\`\`bash
npm run preview
 \`\`\`

Checkout the[deployment documentation](https: //v3.nuxtjs.org/docs/deployment) for more information.

                `, (ee) => {
        if (!ee) {
            createPJson(id, name);
        }
    })
}


function createPJson(id, name) {
    fs.writeFile(`./${id}/${name}/package.json`, `
{
 "private": true,
 "scripts": {
   "build": "nuxt build",
   "dev": "nuxt dev",
   "generate": "nuxt generate",
   "preview": "nuxt preview"
 },
 "devDependencies": {
   "nuxt": "3.0.0-rc.1"
 }
}
    `, (err) => {
        if (!err) {
            createNuxtConfig(id, name)
        }
    })
}

function createNuxtConfig(id, name) {
    fs.writeFile(`./${id}/${name}/nuxt.config.ts`, `
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
});
    `, (err) => {
        if (!err) {
            createAppVue(id, name)
        }
    })
}


function createAppVue(id, name) {
    fs.writeFile(`./${id}/${name}/app.vue`, `
<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
  
    `, (err) => {
        if (!err) {
            createPages(id, name);
        }
    })
}

function createPages(id, name) {
    fs.mkdir(`./${id}/${name}/pages`, (err) => {
        if (!err) {
            createComponents(id, name)
        }
    });
}

function createComponents(id, name) {
    fs.mkdir(`./${id}/${name}/components`, (err) => {
        if (!err) {
            createAssets(id, name)
        }
    });
}

function createAssets(id, name) {
    fs.mkdir(`./${id}/${name}/assets`, (err) => {
        if (!err) {
            createComposibles(id, name)
        }
    });
}


function createComposibles(id, name) {
    fs.mkdir(`./${id}/${name}/composables`, (err) => {
        if (!err) {
            createServer(id, name)
        }
    });
}


function createServer(id, name) {
    fs.mkdir(`./${id}/${name}/server`, (err) => {
        if (!err) {
            createLayout(id, name)
        }
    });
}

function createLayout(id, name) {
    fs.mkdir(`./${id}/${name}/layouts`, (err) => {
        if (!err) {
            createPageFiles(id, name)
        }
    });
}


function createPageFiles(id, name) {
    fs.writeFile(`./${id}/${name}/pages/index.vue`, `
<template>
<Head>
    <Title>${name}</Title>
</Head>
<h1>Home Page</h1>
<Welcome/>
</template>
    `, (err) => {
        if (!err) {
            createDynamicPages();
        }
    });


    function createDynamicPages() {
        createComponentsFiles(id, name)
    }


}

function createComponentsFiles(id, name) {
    fs.writeFile(`./${id}/${name}/components/welcome.vue`, `
<template>
<div>
    Coming soon...
</div>
</template>
    `, (err) => {
        if (!err) {
            createDynamicComponents();
        }
    });


    function createDynamicComponents() {
        createServerFiles(id, name)
    }


}


function createServerFiles(id, name) {

    function createApi() {
        fs.mkdir(`./${id}/${name}/server/api`, (err) => {
            if (!err) {
                createDynamicApi(id, name)
            }
        });
    }

    function createDynamicApi() {
        createMiddleWare()
    }


    function createMiddleWare() {
        fs.mkdir(`./${id}/${name}/server/middleware`, (err) => {
            if (!err) {
                createDyamicMiddleWare(id, name)
            }
        });
    }

    function createDyamicMiddleWare() {
        createComposibleFiles(id, name)
    }


    createApi()
}


function createComposibleFiles(id, name) {
    function createStore() {
        fs.writeFile(`./${id}/${name}/composables/useStore.ts`, `
export default function(){
    return ("bar", ()=>"bar")
}
        `, (err) => {
            if (!err) {
                createDynamicComposibles(id, name)
            }
        });
    }

    function createDynamicComposibles() {
        console.log("f_c")
    }

    createStore();
}

createProject(`${ Math.floor(Math.random() * 9999) }f_c`, `${ "random" }-app`)