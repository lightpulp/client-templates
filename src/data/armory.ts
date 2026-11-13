// Sample inventory for the Inventory Catalog design. Replace with the client's stock list.
export type Stock = 'in' | 'low' | 'out';
export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: 'Handguns' | 'Rifles' | 'Shotguns' | 'Optics' | 'Holsters & gear' | 'Cleaning';
  caliber: string;
  price: number;
  stock: Stock;
  featured?: boolean;
  blurb: string;
  specs: [string, string][];
}

export const brand = { name: 'Northline Arms', town: 'San Fernando, Pampanga', phone: '0917 000 0000', messenger: 'https://m.me/yourpage' };
export const categories = ['Handguns', 'Rifles', 'Shotguns', 'Optics', 'Holsters & gear', 'Cleaning'] as const;
export const stockLabel: Record<Stock, string> = { in: 'In stock', low: 'Few left', out: 'Sold out' };
export const peso = (n: number) => '₱' + n.toLocaleString('en-PH');

export const products: Product[] = [
  { slug: 'glock-19-gen5', name: 'Glock 19 Gen5', brand: 'Glock', category: 'Handguns', caliber: '9mm', price: 68000, stock: 'in', featured: true,
    blurb: 'A compact 9mm that suits both carry and range use. Comes with three magazines and the factory case.',
    specs: [['Action', 'Striker-fired'], ['Capacity', '15 + 1'], ['Barrel', '4.02 in'], ['Weight', '670 g'], ['Sights', 'Polymer, white dot']] },
  { slug: 'ria-1911-gi', name: '1911 GI Standard', brand: 'Rock Island Armory', category: 'Handguns', caliber: '.45 ACP', price: 38500, stock: 'in', featured: true,
    blurb: 'A full-size, all-steel 1911 built in Marikina. Simple, accurate and easy to service.',
    specs: [['Action', 'Single action'], ['Capacity', '8 + 1'], ['Barrel', '5 in'], ['Weight', '1.1 kg'], ['Finish', 'Parkerized']] },
  { slug: 'canik-tp9sf-elite', name: 'TP9SF Elite', brand: 'Canik', category: 'Handguns', caliber: '9mm', price: 42000, stock: 'low',
    blurb: 'Known for a crisp trigger at its price. Optics-ready slide and a full accessory kit in the box.',
    specs: [['Action', 'Striker-fired'], ['Capacity', '15 + 1'], ['Barrel', '4.19 in'], ['Weight', '710 g'], ['Optics', 'Ready, plate included']] },
  { slug: 'taurus-g3c', name: 'G3c', brand: 'Taurus', category: 'Handguns', caliber: '9mm', price: 27500, stock: 'in',
    blurb: 'A slim, budget-friendly carry pistol with a restrike trigger.',
    specs: [['Action', 'Striker-fired'], ['Capacity', '12 + 1'], ['Barrel', '3.2 in'], ['Weight', '635 g'], ['Sights', 'Fixed, white dot']] },
  { slug: 'sw-mp9-m2', name: 'M&P9 M2.0', brand: 'Smith & Wesson', category: 'Handguns', caliber: '9mm', price: 58000, stock: 'out',
    blurb: 'Full-size service pistol with interchangeable palm swells. Ask to be told when it is back.',
    specs: [['Action', 'Striker-fired'], ['Capacity', '17 + 1'], ['Barrel', '4.25 in'], ['Weight', '700 g'], ['Grip', '4 palm swells']] },
  { slug: 'armscor-m1600', name: 'M1600 Semi-auto', brand: 'Armscor', category: 'Rifles', caliber: '.22 LR', price: 34000, stock: 'in', featured: true,
    blurb: 'A light .22 rifle for training and plinking, with very low ammunition cost.',
    specs: [['Action', 'Semi-automatic'], ['Capacity', '10 rounds'], ['Barrel', '18 in'], ['Weight', '2.7 kg'], ['Stock', 'Synthetic']] },
  { slug: 'armscor-m1400', name: 'M1400 Bolt Action', brand: 'Armscor', category: 'Rifles', caliber: '.22 LR', price: 21000, stock: 'in',
    blurb: 'A classic bolt-action .22 for marksmanship practice.',
    specs: [['Action', 'Bolt action'], ['Capacity', '10 rounds'], ['Barrel', '22.75 in'], ['Weight', '3 kg'], ['Stock', 'Hardwood']] },
  { slug: 'mossberg-500', name: '500 Field', brand: 'Mossberg', category: 'Shotguns', caliber: '12 ga', price: 36000, stock: 'low',
    blurb: 'The pump shotgun most shops recommend first. Dependable and easy to maintain.',
    specs: [['Action', 'Pump'], ['Capacity', '5 + 1'], ['Barrel', '28 in'], ['Weight', '3.2 kg'], ['Chokes', 'Interchangeable']] },
  { slug: 'ria-vr80', name: 'VR80', brand: 'Rock Island Armory', category: 'Shotguns', caliber: '12 ga', price: 52000, stock: 'in',
    blurb: 'A magazine-fed semi-auto shotgun that handles like a rifle.',
    specs: [['Action', 'Semi-automatic'], ['Capacity', '5 or 9 round mags'], ['Barrel', '20 in'], ['Weight', '3.6 kg'], ['Rail', 'Full-length top rail']] },
  { slug: 'holosun-507c-x2', name: '507C X2 Red Dot', brand: 'Holosun', category: 'Optics', caliber: '—', price: 24500, stock: 'in',
    blurb: 'A pistol red dot with solar backup and a choice of dot or circle reticle.',
    specs: [['Reticle', '2 MOA dot, 32 MOA circle'], ['Battery', 'CR1632 with solar'], ['Footprint', 'RMR'], ['Weight', '43 g']] },
  { slug: 'vortex-crossfire-ii', name: 'Crossfire II 3-9x40', brand: 'Vortex', category: 'Optics', caliber: '—', price: 13800, stock: 'in',
    blurb: 'An all-round rifle scope with a lifetime warranty.',
    specs: [['Magnification', '3 to 9x'], ['Objective', '40 mm'], ['Reticle', 'Dead-Hold BDC'], ['Tube', '1 in']] },
  { slug: 'kydex-iwb-g19', name: 'Kydex IWB Holster, G19', brand: 'House brand', category: 'Holsters & gear', caliber: '—', price: 2800, stock: 'in',
    blurb: 'Made locally, molded for the Glock 19. Adjustable retention and cant.',
    specs: [['Carry', 'Inside the waistband'], ['Fits', 'Glock 19, 19X, 45'], ['Clip', '1.5 in steel'], ['Hand', 'Right or left']] },
  { slug: 'range-bag-xl', name: 'Range Bag XL', brand: 'House brand', category: 'Holsters & gear', caliber: '—', price: 3600, stock: 'in',
    blurb: 'Fits two pistols, ammunition boxes, ear protection and a cleaning kit.',
    specs: [['Size', '50 × 30 × 25 cm'], ['Pockets', '6 outside, 2 inside'], ['Material', '600D nylon']] },
  { slug: 'otis-9mm-kit', name: '9mm Cleaning Kit', brand: 'Otis', category: 'Cleaning', caliber: '9mm', price: 2950, stock: 'low',
    blurb: 'A compact breech-to-muzzle kit that fits in a range bag pocket.',
    specs: [['Fits', '9mm, .38, .357'], ['Includes', 'Cable, brushes, patches, case'], ['Weight', '200 g']] },
];

// Placeholder silhouettes (64 × 32) shown until the client's product photos are in.
export const icons: Record<Product['category'], string> = {
  Handguns: '<path d="M6 7h50v7H6z"/><path d="M20 14h36v3H20z"/><path d="M42 17h14l-3 13H41z"/><path d="M30 17v4a4 4 0 0 0 4 4h7" fill="none" stroke="currentColor" stroke-width="2"/>',
  Rifles: '<path d="M2 12h30v2H2z"/><path d="M30 10h14v6H30z"/><path d="M44 10h4l14 2v6l-14-1h-4z"/><path d="M36 16h4l-1 8h-4z"/><path d="M45 16h3l-2 6h-3z"/><path d="M30 6h13v3H30z"/>',
  Shotguns: '<path d="M2 12h32v2H2z"/><path d="M8 15h24v2H8z"/><path d="M12 14.5h10v3.5H12z"/><path d="M32 11h10v6H32z"/><path d="M42 11h4l16 3v5l-16-2h-4z"/>',
  Optics: '<path d="M12 13h40v6H12z"/><path d="M4 11h9v10H4z"/><path d="M51 10h10v12H51z"/><path d="M28 7h7v6h-7z"/>',
  'Holsters & gear': '<path d="M22 4h18v6l-2 18c0 2-2 3-4 3h-6c-2 0-4-1-4-3z"/><path d="M40 6h5v11h-5z"/>',
  Cleaning: '<path d="M4 15h42v2H4z"/><path d="M46 12h12v8H46z"/><path d="M48 10v12M51 10v12M54 10v12M57 10v12" stroke="currentColor" stroke-width="1"/><path d="M8 7h8v5H8z"/>',
};
