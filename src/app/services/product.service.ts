// import { Injectable } from '@angular/core';

// import { Product} from '../entities/product.entity';
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
// products :Product[]= [
//   new Product(1, "AMINA TOWELS - STONE GREY", "Lightweight, absorbent, and oh-so-soft, this oversized Egyptian cotton towel is sure to become your can’t-live-without staple. Hand-loomed by a weaving cooperative right outside of Marrakech, each towel takes over a day to complete. All made start to finish in a fair trade environment.", 1000, "assets/bath1.jpg"),
//   new Product(2, "IMABARI WAFFLE TOWELS", "Lightweight, absorbent, and quick to dry. Woven from soft, long-staple Pima cotton. It doesn’t get better than luxe Japanese waffle weave towels.", 2500, "assets/bath2.jpg"),
//   new Product(3, "SAHAR BATH RUG - IVORY & BLACK", "Hand-loomed by a weaving cooperative right outside of Marrakech, each Turkish style towel takes over a day to complete. All made start to finish in a fair trade environment.", 600, "assets/bath3.jpg"),
//   new Product(4, "HINOKI WOOD BATH MAT ", "Create a zen-like retreat with our modern take on the bath mat, handcrafted from beautiful Japanese Hinoki wood", 1500, "assets/bath4.jpg"),
//   new Product(5, "AMINA BATH RUG - STONE GREY", "Crafted in a stone grey hue, finished with subtle tassels, this small bath rug instantly ups your bathroom game. Hand-loomed using premium cotton.", 500, "assets/bath5.jpg"),
//   new Product(6, "FARAH TOWELS - CREAM", "Our spin on the classic white towel — incredibly soft and absorbent Egyptian cotton, hand-loomed to nubby perfection. The result is an organic texture that’s feel-it-to-believe-it soft with a beautiful drape.", 1600, "assets/bath6.jpg")

// ]
//   constructor() { }
//   getProducts(): Product[]{
//     return this.products
//   }
// }

import { Injectable } from '@angular/core';

import { Product } from '../models/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            {type:1, id: 'p01', name: 'AMINA TOWELS - STONE GREY', price: 1000, photo: 'assets/bath1.jpg', photo1: 'assets/bath12.jpg' },
            {type:1, id: 'p02', name: 'IMABARI WAFFLE TOWELS', price: 1500, photo: 'assets/bath2.jpg', photo1: 'assets/bath22.jpg' },
            {type:1, id: 'p03', name: 'SAHAR BATH RUG - IVORY & BLACK', price: 1000, photo: 'assets/bath3.jpg', photo1: 'assets/bath32.jpg' },
            {type:1, id: 'p04', name: 'HINOKI WOOD BATH MAT', price: 2500, photo: 'assets/bath4.jpg', photo1: 'assets/bath42.jpg' },
            {type:1, id: 'p05', name: 'AMINA BATH RUG - STONE GREY', price: 1600, photo: 'assets/bath5.jpg', photo1: 'assets/bath52.jpg' },
            {type:1, id: 'p06', name: 'FARAH TOWELS - CREAM', price: 1000, photo: 'assets/bath6.jpg', photo1: 'assets/bath62.jpg' },
            
            {type:8, id: 'p36', name: 'LOKTAK SHOWER CURTAIN- SAND', price: 500, photo: 'assets/c1.jpg', photo1: 'assets/c12.jpg' },
            {type:8, id: 'p37', name: 'LOKTAK SHOWER CURTAIN- WHITE', price: 500, photo: 'assets/c2.jpg', photo1: 'assets/c22.jpg' },
            {type:8, id: 'p38', name: 'CHILKA SHOWER CURTAIN- SKY', price: 600, photo: 'assets/c3.jpg', photo1: 'assets/c32.jpg' },

            {type:3, id: 'p13', name: 'TESSO LOUNGE CHAIR - LINEN CUSHION', price: 4000, photo: 'assets/ch1.jpg', photo1: 'assets/ch12.jpg' },
            {type:3, id: 'p14', name: 'TESSO LOUNGE CHAIR - LEATHER CUSHION', price: 4500, photo: 'assets/ch2.jpg', photo1: 'assets/ch22.jpg' },
            {type:3, id: 'p15', name: 'MERU CHAIR - MINDI', price: 2000, photo: 'assets/ch3.jpg', photo1: 'assets/ch32.jpg' },
            {type:3, id: 'p16', name: 'LOMBOK RATTAN LOUNGE CHAIR', price: 1500, photo: 'assets/ch4.jpg', photo1: 'assets/ch42.jpg' },
            {type:3, id: 'p17', name: 'PALERMO CHAIR - BLACK & NATURAL', price: 1800, photo: 'assets/ch5.jpg', photo1: 'assets/ch52.jpg' },
            {type:3, id: 'p18', name: 'PALERMO CHAIR - BLACK & GREY COWHIDE', price: 1800, photo: 'assets/ch6.jpg', photo1: 'assets/ch62.jpg' },

            {type:9, id: 'p39', name: 'APASCO 5-PIECE MEZCAL SET - CLEAR', price: 500, photo: 'assets/k1.jpg', photo1: 'assets/k12.jpg' },
            {type:9, id: 'p40', name: 'LA PIEDRA COASTERS - SET OF 6', price: 300, photo: 'assets/k2.jpg', photo1: 'assets/k22.jpg' },
            {type:9, id: 'p41', name: 'HALSTON MUGS-CREAM', price: 450, photo: 'assets/k3.jpg', photo1: 'assets/k32.jpg' },
            {type:9, id: 'p42', name: 'HALSTON MUGS-OLIVE', price: 450, photo: 'assets/k4.jpg', photo1: 'assets/k42.jpg' },
            {type:9, id: 'p43', name: 'HALSTON PITCHERS - NAVY', price: 500, photo: 'assets/k5.jpg', photo1: 'assets/k52.jpg' },
            {type:9, id: 'p44', name: 'THE BARISTA SET - EARTH', price: 700, photo: 'assets/k6.jpg', photo1: 'assets/k62.jpg' },
            {type:9, id: 'p45', name: 'PUEBLA MARBLE ENTERTAINING SET', price: 900, photo: 'assets/k7.jpg', photo1: 'assets/k72.jpg' },
            {type:9, id: 'p46', name: 'PASHAN COPPER VASES', price: 500, photo: 'assets/k8.jpg', photo1: 'assets/k82.jpg' },
            {type:9, id: 'p47', name: 'DASAR BRONZE TRAYS', price: 800, photo: 'assets/k9.jpg', photo1: 'assets/k92.jpg' },
            {type:9, id: 'p48', name: 'GRANO COFFEE SCOOP', price: 200, photo: 'assets/k10.jpg', photo1: 'assets/k102.jpg' },
            {type:9, id: 'p49', name: 'ORO CACAO CUPS', price: 800, photo: 'assets/k11.jpg', photo1: 'assets/k112.jpg' },
            {type:9, id: 'p50', name: 'PUEBLA MARBLE PLANTERS - SET OF 2', price: 700, photo: 'assets/k121.jpg', photo1: 'assets/k122.jpg' },

            {type:4, id: 'p19', name: 'NAGA RATTAN SIDE TABLE', price: 1500, photo: 'assets/ts1.jpg', photo1: 'assets/ts12.jpg' },
            {type:4, id: 'p20', name: 'JAVA RATTAN COFFEE TABLE', price: 1700, photo: 'assets/ts2.jpg', photo1: 'assets/ts22.jpg' },
            {type:4, id: 'p21', name: 'KAYAN NIGHTSTAND - MINDI & CANE', price: 2000, photo: 'assets/ts3.jpg', photo1: 'assets/ts32.jpg' },

            {type:2, id: 'p07', name: 'BICO BED BLANKET-BLACK', price: 1500, photo: 'assets/bb1.jpg', photo1: 'assets/bb12.jpg' },
            {type:2, id: 'p08', name: 'BICO BED BLANKET-GREY', price: 1500, photo: 'assets/bb2.jpg', photo1: 'assets/bb22.jpg' },
            {type:2, id: 'p09', name: 'BICO BED BLANKET-CREAM', price: 1500, photo: 'assets/bb3.jpg', photo1: 'assets/bb32.jpg' },
            {type:2, id: 'p10', name: 'DOHA BED BLANKET', price: 1000, photo: 'assets/bb4.jpg', photo1: 'assets/bb42.jpg' },
            {type:2, id: 'p11', name: 'RAHIM COTTON BED BLANKET', price: 1200, photo: 'assets/bb5.jpg', photo1: 'assets/bb52.jpg' },
            {type:2, id: 'p12', name: 'ADARA WEDDING BLANKET', price: 2500, photo: 'assets/bb62.jpg', photo1: 'assets/bb6.jpg' },

            {type:6, id: 'p26', name: 'STONEWASHED LINEN SHEET SET - GRAPHIE STRIPE', price: 900, photo: 'assets/sp1.jpg', photo1: 'assets/sp12.jpg' },
            {type:6, id: 'p27', name: 'STONEWASHED LINEN SHEET SET - SAND STRIPE', price: 900, photo: 'assets/sp2.jpg', photo1: 'assets/sp22.jpg' },
            {type:6, id: 'p28', name: 'STONEWASHED LINEN SHEET SET - SLATE BLUE', price: 900, photo: 'assets/sp3.jpg', photo1: 'assets/sp32.jpg' },
            {type:6, id: 'p29', name: 'STONEWASHED LINEN PILLOWCASES-SAND STRIPE', price: 400, photo: 'assets/sp4.jpg', photo1: 'assets/sp42.jpg' },
            {type:6, id: 'p30', name: 'STONEWASHED LINEN PILLOWCASES-SLATE BLUE', price: 400, photo: 'assets/sp5.jpg', photo1: 'assets/sp52.jpg' },
            {type:6, id: 'p31', name: 'STONEWASHED LINEN PILLOWCASES-OLIVE', price: 400, photo: 'assets/sp6.jpg', photo1: 'assets/sp62.jpg' },

            {type:5, id: 'p22', name: 'TORRES LEATHER OTTOMAN - MEDIUM & LARGE', price: 3000, photo: 'assets/op1.jpg', photo1: 'assets/op12.jpg' },
            {type:5, id: 'p23', name: 'PALERMO TRIPOLINA CAMP STOOL', price: 900, photo: 'assets/op2.jpg', photo1: 'assets/op22.jpg' },
            {type:5, id: 'p24', name: 'RIAD LEATHER OTTOMAN', price: 1000, photo: 'assets/op3.jpg', photo1: 'assets/op32.jpg' },
            {type:5, id: 'p25', name: 'SAN RAFAEL SAFARI STOOL', price: 1200, photo: 'assets/op4.jpg', photo1: 'assets/op42.jpg' },

            // {type:7, id: 'p32', name: 'STONEWASHED LINEN DUVET COVER-GRAPHITE STRIPE', price: 800, photo: 'assets/d1.jpg', photo1: 'assets/d12.jpg' },
            // {type:7, id: 'p33', name: 'STONEWASHED LINEN DUVET COVER-SLATE BLUE', price: 800, photo: 'assets/d2.jpg', photo1: 'assets/d22.jpg' },
            // {type:7, id: 'p34', name: 'STONEWASHED LINEN DUVET COVER-OLIVE', price: 800, photo: 'assets/d3.jpg', photo1: 'assets/d32.jpg' },
            // {type:7, id: 'p35', name: 'STONEWASHED LINEN QUILT', price: 3000, photo: 'assets/d42.jpg', photo1: 'assets/d42.jpg' },

        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
