import axios from 'axios';
import { Crypto } from '../models/Crypto';

export async function getCryptos(start = 0, limit = 10): Promise<Crypto[]> {
  const res = await axios.get(`https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`);

  return res.data.data.map((item: any) =>
    new Crypto(
      item.id,
      item.name,
      item.symbol,
      parseFloat(item.price_usd), 
      item.price_btc,
      item.price_usd,
      parseFloat(item.percent_change_24h), 
      `https://www.coinlore.com/img/25x25/${item.nameid}.png`, 
      item.market_cap_usd, 
      item.rank,
      item.tsupply,
      item.volume24,
      item.volume24a,
      item.market_cap_usd, 
      item.nameid,
      item.percent_change_1h, 
      item.percent_change_7d, 
      item.percent_change_24h,
    )
  );
}