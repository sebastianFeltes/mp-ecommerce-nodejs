// SDK de Mercado Pago
import { MercadoPagoConfig } from "mercadopago";

export async function createPreference(product) {
  // Agrega credenciales
  const client = new MercadoPagoConfig({ accessToken: "YOUR_ACCESS_TOKEN" });
  //product on this structure:
  //{ img: './assets/l6g6.jpg', title: 'LG G6', price: '10000', unit: '1' }
  preference
    .create({
      body: {
        items: [
          {
            title: product.title,
            quantity: product.unit,
            unit_price: product.price,
          },
        ],
      },
    })
    .then(console.log)
    .catch(console.log);
}
