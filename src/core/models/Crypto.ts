export class Crypto {
  constructor(
    public id: string,
    public name: string,
    public symbol: string,
    public price: number,
    public price_btc: string,
    public price_usd: string,
    public change24h: number,
    public image: string,
    public marketCap: string,
    public rank: number,
    public tsupply: string,
    public volume24: number,
    public volume24a: number,
    public market_cap_usd: string,
    public nameid: string,
    public percent_change_1h: string,
    public percent_change_7d: string,
    public percent_change_24h: string
  ) {}

  isFalling(threshold: number): boolean {
    return this.volume24 < -threshold;
  }
}