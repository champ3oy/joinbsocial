const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

export async function POST(req, res) {
  if (req.method === "POST") {
    let url = new URL(req.url);

    let searchParams = new URLSearchParams(url.search);
    let price = searchParams.get("price");
    let cid = searchParams.get("cid");
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Besocial Tip",
              },
              unit_amount: Number(price) * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        // client_reference_id: JSON.stringify({
        //   msgToken: query?.msgToken,
        //   username: query?.username,
        //   cardID: query?.cid,
        // }),
        success_url: `${url.origin}/${cid}/?success=true`,
        cancel_url: `${url.origin}/${cid}/?canceled=true`,
      });

      return res.json()({ url: session.url });
    } catch (err) {
      console.log(err);
      return res.json({ msg: false });
    }
  } else {
    return res.json({ msg: false });
  }
}
