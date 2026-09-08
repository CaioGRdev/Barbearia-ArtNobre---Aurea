### Ajustes Imediatos de SEO no Código React

No React com Vite, como tudo roda no lado do cliente (SPA), precisamos deixar os metadados visíveis para os robôs do Google.

#### A. Instale a biblioteca `react-helmet-async`
Ela permite alterar o título e a descrição de cada página dinamicamente no React.

```bash
npm install react-helmet-async
```
### 2. Checklist de SEO Local (O mais importante para Barbearias)

Para negócios locais, o Google Meu Negócio (Perfil da Empresa) é a ferramenta que mais traz clientes no topo das pesquisas (no mapa).

* **Perfil no Google Meu Negócio:** Crie ou reivindique a ficha da barbearia no Google Maps.
* **Consistência NAP (Nome, Endereço, Telefone):** O nome, endereço e telefone no site DEVEM ser idênticos aos cadastrados no Google Maps.
* **Avaliações (5 Estrelas):** Incentive os clientes a deixarem avaliações no Google. É o fator nº 1 para subir no ranking do mapa.
* **Adicionar Endereço no Rodapé do Site:** Crie um componente de Rodapé (`Footer.jsx`) no React exibindo o endereço físico completo e o mapa embutido.

### 3. Desempenho e Velocidade do Site (Vite + React)

O Google penaliza sites lentos. Como seu layout usa imagens de fundo pesadas e escuros sofisticados:

* **Otimize as Imagens:** Converta imagens `.png` ou `.jpg` para a extensão `.webp` (elas ficam até 80% mais leves mantendo a qualidade).
* **Defina Alt Text:** Adicione sempre `alt="Corte de cabelo Barbearia Art Nobre"` nas tags `<img>`.
https://squoosh.app/editor --site para converter para webp

https://upscayl.org/login -- site para upscalle