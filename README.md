# CT Pedro Albuquerque — Landing Page

Landing page de alta conversão para o **CT Pedro Albuquerque** (Centro de Treinamento de Combate).

## Stack
- React 19 + React Router 7
- Tailwind CSS 3 + shadcn/ui
- Embla Carousel (depoimentos)
- Lucide Icons
- Build: CRA + craco

## Estrutura
```
/frontend          ← código da landing (deployar este diretório no Vercel)
  /src
    /components    ← Hero, Modalities, Authority, Testimonials, Instagram, Navbar, Footer, WhatsappFloat
    /hooks         ← useReveal (IntersectionObserver para fade-ins)
  vercel.json      ← config de deploy
/backend           ← FastAPI (não usado pela landing — ignorar no deploy)
```

## Deploy no Vercel

### 1. Import do GitHub
- Acesse [vercel.com/new](https://vercel.com/new)
- Selecione o repositório `CT-PEDRO-ALBUQUERQUE`

### 2. Configuração (na tela de import)
| Campo | Valor |
|---|---|
| **Root Directory** | `frontend` ⚠️ obrigatório |
| Framework Preset | Create React App *(auto-detectado)* |
| Build Command | `CI=false yarn build` *(já no vercel.json)* |
| Output Directory | `build` *(já no vercel.json)* |
| Install Command | `yarn install --frozen-lockfile=false` *(já no vercel.json)* |
| Environment Variables | *(nenhuma — a landing é 100% estática)* |

### 3. Deploy
Clique em **Deploy**. Build leva ~1 min.

## Desenvolvimento local
```bash
cd frontend
yarn install
yarn start    # http://localhost:3000
```

## Build local de produção
```bash
cd frontend
CI=false yarn build
npx serve build
```

## Itens a personalizar
| Local | O que trocar |
|---|---|
| `src/components/WhatsappFloat.jsx` | Número de WhatsApp (`PHONE`) |
| `src/components/Authority.jsx` | URL do WhatsApp no botão da faixa CTA |
| `src/components/Testimonials.jsx` | `GOOGLE_REVIEW_URL` (Place ID) + `GOOGLE_PROFILE_URL` + array `testimonials` |
| `src/components/Instagram.jsx` | `INSTAGRAM_URL` + `INSTAGRAM_HANDLE` (já configurado) |

## Licença
Privado.
