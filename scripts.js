var acceptable = []
var data = {
    "unique_image_url_prefixes": [],
    "products_and_categories": {
        "Accessories": [
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Nuptse Blanket",
                "id": 174036,
                "image_url": "//assets.supremenewyork.com/209608/ca/DJpdw-oG1mw.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209608/rc/DJpdw-oG1mw.jpg",
                "price": 29800,
                "sale_price": 0,
                "new_item": true,
                "position": 8,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/Yashica MF-1 Camera",
                "id": 174025,
                "image_url": "//assets.supremenewyork.com/207412/ca/RFVnXu8oAuo.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207412/rc/RFVnXu8oAuo.jpg",
                "price": 6800,
                "sale_price": 0,
                "new_item": true,
                "position": 47,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/Zoku® Glass Core 16 oz. Bottle",
                "id": 173914,
                "image_url": "//assets.supremenewyork.com/207602/ca/zLx9FQe-piw.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207602/rc/zLx9FQe-piw.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": false,
                "position": 48,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/mophie® powerstation Plus XL",
                "id": 173998,
                "image_url": "//assets.supremenewyork.com/208810/ca/200ZE6DrX-c.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208810/rc/200ZE6DrX-c.jpg",
                "price": 13800,
                "sale_price": 0,
                "new_item": false,
                "position": 49,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/Hanes® Tagless Tees (2 Pack)",
                "id": 173919,
                "image_url": "//assets.supremenewyork.com/207693/ca/HLP3YRiAseU.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207693/rc/HLP3YRiAseU.jpg",
                "price": 2800,
                "sale_price": 0,
                "new_item": false,
                "position": 51,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/Hanes® Tagless Tees (3 Pack)",
                "id": 173918,
                "image_url": "//assets.supremenewyork.com/208028/ca/S8Q2vEgrLdM.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208028/rc/S8Q2vEgrLdM.jpg",
                "price": 2800,
                "sale_price": 0,
                "new_item": false,
                "position": 52,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/Hanes® Boxer Briefs (2 Pack)",
                "id": 173930,
                "image_url": "//assets.supremenewyork.com/207607/ca/Ld_W_nYwquA.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207607/rc/Ld_W_nYwquA.jpg",
                "price": 2800,
                "sale_price": 0,
                "new_item": false,
                "position": 53,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/Hanes® Boxer Briefs (4 Pack)",
                "id": 173886,
                "image_url": "//assets.supremenewyork.com/208035/ca/nAFfIu4RJ2E.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208035/rc/nAFfIu4RJ2E.jpg",
                "price": 3600,
                "sale_price": 0,
                "new_item": false,
                "position": 54,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/Hanes® Crew Socks (4 Pack)",
                "id": 173945,
                "image_url": "//assets.supremenewyork.com/207684/ca/gLsD02TR4NI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207684/rc/gLsD02TR4NI.jpg",
                "price": 2000,
                "sale_price": 0,
                "new_item": false,
                "position": 55,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/Hanes® Crew Socks (4 Pack)",
                "id": 173890,
                "image_url": "//assets.supremenewyork.com/208032/ca/rWo9faemiIg.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208032/rc/rWo9faemiIg.jpg",
                "price": 2000,
                "sale_price": 0,
                "new_item": false,
                "position": 56,
                "category_name": "Accessories"
            }
        ],
        "Pants": [
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Nuptse Pant",
                "id": 174043,
                "image_url": "//assets.supremenewyork.com/209637/ca/jsSnawsqWFg.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209637/rc/jsSnawsqWFg.jpg",
                "price": 22800,
                "sale_price": 0,
                "new_item": true,
                "position": 4,
                "category_name": "Pants"
            },
            {
                "name": "Pleated Trouser",
                "id": 174030,
                "image_url": "//assets.supremenewyork.com/205557/ca/uXSR4i0QpzQ.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205557/rc/uXSR4i0QpzQ.jpg",
                "price": 16800,
                "sale_price": 0,
                "new_item": true,
                "position": 28,
                "category_name": "Pants"
            },
            {
                "name": "Work Pant",
                "id": 173927,
                "image_url": "//assets.supremenewyork.com/205251/ca/D62IWF8Y0r4.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205251/rc/D62IWF8Y0r4.jpg",
                "price": 11800,
                "sale_price": 0,
                "new_item": false,
                "position": 29,
                "category_name": "Pants"
            },
            {
                "name": "Cargo Flight Pant",
                "id": 173954,
                "image_url": "//assets.supremenewyork.com/205332/ca/vGO9A6eSjj0.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205332/rc/vGO9A6eSjj0.jpg",
                "price": 16800,
                "sale_price": 0,
                "new_item": false,
                "position": 30,
                "category_name": "Pants"
            },
            {
                "name": "Regular Jean",
                "id": 173952,
                "image_url": "//assets.supremenewyork.com/205182/ca/AFZ_C3H9Tfk.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205182/rc/AFZ_C3H9Tfk.jpg",
                "price": 14800,
                "sale_price": 0,
                "new_item": false,
                "position": 31,
                "category_name": "Pants"
            },
            {
                "name": "Stone Washed Slim Jean",
                "id": 173963,
                "image_url": "//assets.supremenewyork.com/205240/ca/ZsxOTvwuqIQ.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205240/rc/ZsxOTvwuqIQ.jpg",
                "price": 16800,
                "sale_price": 0,
                "new_item": false,
                "position": 32,
                "category_name": "Pants"
            },
            {
                "name": "Rigid Slim Jean",
                "id": 173888,
                "image_url": "//assets.supremenewyork.com/205221/ca/FB20W5I49P8.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205221/rc/FB20W5I49P8.jpg",
                "price": 15800,
                "sale_price": 0,
                "new_item": false,
                "position": 33,
                "category_name": "Pants"
            },
            {
                "name": "Stone Washed Black Slim Jean",
                "id": 173920,
                "image_url": "//assets.supremenewyork.com/205195/ca/NXEqtgDfcVw.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205195/rc/NXEqtgDfcVw.jpg",
                "price": 14800,
                "sale_price": 0,
                "new_item": false,
                "position": 34,
                "category_name": "Pants"
            }
        ],
        "Bags": [
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Small Base Camp Duffle Bag",
                "id": 174027,
                "image_url": "//assets.supremenewyork.com/209715/ca/q2AVJ2dZLmU.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209715/rc/q2AVJ2dZLmU.jpg",
                "price": 16800,
                "sale_price": 0,
                "new_item": true,
                "position": 6,
                "category_name": "Bags"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Explore Utility Tote",
                "id": 174028,
                "image_url": "//assets.supremenewyork.com/209685/ca/JXsTgcfxdbI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209685/rc/JXsTgcfxdbI.jpg",
                "price": 13800,
                "sale_price": 0,
                "new_item": true,
                "position": 7,
                "category_name": "Bags"
            },
            {
                "name": "Backpack",
                "id": 173926,
                "image_url": "//assets.supremenewyork.com/207145/ca/eOAzjaB7_dM.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207145/rc/eOAzjaB7_dM.jpg",
                "price": 14800,
                "sale_price": 0,
                "new_item": false,
                "position": 41,
                "category_name": "Bags"
            },
            {
                "name": "Duffle Bag",
                "id": 173917,
                "image_url": "//assets.supremenewyork.com/207156/ca/lQOmyoXbiYw.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207156/rc/lQOmyoXbiYw.jpg",
                "price": 14800,
                "sale_price": 0,
                "new_item": false,
                "position": 42,
                "category_name": "Bags"
            },
            {
                "name": "Zip Tote",
                "id": 173948,
                "image_url": "//assets.supremenewyork.com/207339/ca/9ojBINdEU6U.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207339/rc/9ojBINdEU6U.jpg",
                "price": 11800,
                "sale_price": 0,
                "new_item": false,
                "position": 43,
                "category_name": "Bags"
            },
            {
                "name": "Sling Bag",
                "id": 173893,
                "image_url": "//assets.supremenewyork.com/207327/ca/14EuDrxvyNI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207327/rc/14EuDrxvyNI.jpg",
                "price": 7800,
                "sale_price": 0,
                "new_item": false,
                "position": 44,
                "category_name": "Bags"
            },
            {
                "name": "Waist Bag",
                "id": 173894,
                "image_url": "//assets.supremenewyork.com/207178/ca/ymAO4-YTFqU.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207178/rc/ymAO4-YTFqU.jpg",
                "price": 7800,
                "sale_price": 0,
                "new_item": false,
                "position": 45,
                "category_name": "Bags"
            },
            {
                "name": "Neck Pouch",
                "id": 173950,
                "image_url": "//assets.supremenewyork.com/207252/ca/1S6bi-WNKyQ.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207252/rc/1S6bi-WNKyQ.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": false,
                "position": 46,
                "category_name": "Bags"
            }
        ],
        "Tops/Sweaters": [
            {
                "name": "Supreme®/The North Face® Ice Climb Tee",
                "id": 174022,
                "image_url": "//assets.supremenewyork.com/209731/ca/v7uTkuL-Lvo.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209731/rc/v7uTkuL-Lvo.jpg",
                "price": 7800,
                "sale_price": 0,
                "new_item": true,
                "position": 5,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Inside Out Logo Sweater",
                "id": 174031,
                "image_url": "//assets.supremenewyork.com/204845/ca/7tfef5Bf0H8.jpg",
                "image_url_hi": "//assets.supremenewyork.com/204845/rc/7tfef5Bf0H8.jpg",
                "price": 14800,
                "sale_price": 0,
                "new_item": true,
                "position": 12,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Arabic Logo Soccer Jersey",
                "id": 174023,
                "image_url": "//assets.supremenewyork.com/206698/ca/t_Zo8QxGV9g.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206698/rc/t_Zo8QxGV9g.jpg",
                "price": 9800,
                "sale_price": 0,
                "new_item": true,
                "position": 21,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Old English Collar Logo L/S Top",
                "id": 174032,
                "image_url": "//assets.supremenewyork.com/206702/ca/VFdz839I-A4.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206702/rc/VFdz839I-A4.jpg",
                "price": 8800,
                "sale_price": 0,
                "new_item": true,
                "position": 22,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Split Logo Pullover",
                "id": 174009,
                "image_url": "//assets.supremenewyork.com/209368/ca/qnIhbVBqJbU.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209368/rc/qnIhbVBqJbU.jpg",
                "price": 12800,
                "sale_price": 0,
                "new_item": false,
                "position": 23,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Half Tone L/S Top",
                "id": 173996,
                "image_url": "//assets.supremenewyork.com/206418/ca/315pqwrWAoM.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206418/rc/315pqwrWAoM.jpg",
                "price": 9800,
                "sale_price": 0,
                "new_item": false,
                "position": 24,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Cut Logo S/S Top",
                "id": 173995,
                "image_url": "//assets.supremenewyork.com/206561/ca/E4NY2oc0Jm8.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206561/rc/E4NY2oc0Jm8.jpg",
                "price": 8800,
                "sale_price": 0,
                "new_item": false,
                "position": 25,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Small Box L/S Tee",
                "id": 173897,
                "image_url": "//assets.supremenewyork.com/206379/ca/VM0__4F7XqU.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206379/rc/VM0__4F7XqU.jpg",
                "price": 6800,
                "sale_price": 0,
                "new_item": false,
                "position": 26,
                "category_name": "Tops/Sweaters"
            }
        ],
        "Skate": [
            {
                "name": "Supreme®/Spitfire® Classic Wheels\u003cbr\u003e(Set of 4)",
                "id": 173928,
                "image_url": "//assets.supremenewyork.com/208038/ca/ThOYy4XZNRk.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208038/rc/ThOYy4XZNRk.jpg",
                "price": 3000,
                "sale_price": 0,
                "new_item": false,
                "position": 57,
                "category_name": "Skate"
            },
            {
                "name": "Supreme®/Independent® Truck",
                "id": 173939,
                "image_url": "//assets.supremenewyork.com/208067/ca/JipfM1BbfYg.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208067/rc/JipfM1BbfYg.jpg",
                "price": 5000,
                "sale_price": 0,
                "new_item": false,
                "position": 58,
                "category_name": "Skate"
            },
            {
                "name": "Exit Skateboard",
                "id": 173982,
                "image_url": "//assets.supremenewyork.com/208814/ca/SDmd0m4QnJg.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208814/rc/SDmd0m4QnJg.jpg",
                "price": 5200,
                "sale_price": 0,
                "new_item": false,
                "position": 59,
                "category_name": "Skate"
            }
        ],
        "Shoes": [
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Traction Mule",
                "id": 174033,
                "image_url": "//assets.supremenewyork.com/209704/ca/qlgxf2MmLMg.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209704/rc/qlgxf2MmLMg.jpg",
                "price": 9800,
                "sale_price": 0,
                "new_item": true,
                "position": 9,
                "category_name": "Shoes"
            },
            {
                "name": "Supreme®/Nike® Air Force 1 Low",
                "id": 173941,
                "image_url": "//assets.supremenewyork.com/208043/ca/dwnkz_RsKnM.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208043/rc/dwnkz_RsKnM.jpg",
                "price": 10000,
                "sale_price": 0,
                "new_item": false,
                "position": 50,
                "category_name": "Shoes"
            }
        ],
        "Shirts": [
            {
                "name": "Spray Tartan Shirt",
                "id": 174035,
                "image_url": "//assets.supremenewyork.com/205086/ca/bEviZkG_p3c.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205086/rc/bEviZkG_p3c.jpg",
                "price": 13800,
                "sale_price": 0,
                "new_item": true,
                "position": 13,
                "category_name": "Shirts"
            },
            {
                "name": "Logo Rib S/S Work Shirt ",
                "id": 173953,
                "image_url": "//assets.supremenewyork.com/205116/ca/Gd1o-2BLB0Q.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205116/rc/Gd1o-2BLB0Q.jpg",
                "price": 12800,
                "sale_price": 0,
                "new_item": false,
                "position": 14,
                "category_name": "Shirts"
            },
            {
                "name": "Washed Corduroy Shirt",
                "id": 173973,
                "image_url": "//assets.supremenewyork.com/205067/ca/98ReEWufUa0.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205067/rc/98ReEWufUa0.jpg",
                "price": 13800,
                "sale_price": 0,
                "new_item": false,
                "position": 15,
                "category_name": "Shirts"
            }
        ],
        "Jackets": [
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Nuptse Jacket",
                "id": 174038,
                "image_url": "//assets.supremenewyork.com/209657/ca/Mz0-4AdvLMk.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209657/rc/Mz0-4AdvLMk.jpg",
                "price": 39800,
                "sale_price": 0,
                "new_item": true,
                "position": 0,
                "category_name": "Jackets"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Mountain Light Jacket",
                "id": 174024,
                "image_url": "//assets.supremenewyork.com/209667/ca/qM_4XnTnDpI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209667/rc/qM_4XnTnDpI.jpg",
                "price": 38800,
                "sale_price": 0,
                "new_item": true,
                "position": 1,
                "category_name": "Jackets"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Nuptse Vest",
                "id": 174041,
                "image_url": "//assets.supremenewyork.com/209622/ca/rtWAeWqBUeU.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209622/rc/rtWAeWqBUeU.jpg",
                "price": 24800,
                "sale_price": 0,
                "new_item": true,
                "position": 2,
                "category_name": "Jackets"
            },
            {
                "name": "Logo Camo M-65 Jacket",
                "id": 173980,
                "image_url": "//assets.supremenewyork.com/204491/ca/lMeyePGo-I8.jpg",
                "image_url_hi": "//assets.supremenewyork.com/204491/rc/lMeyePGo-I8.jpg",
                "price": 29800,
                "sale_price": 0,
                "new_item": false,
                "position": 10,
                "category_name": "Jackets"
            },
            {
                "name": "Hooded Facemask Parka",
                "id": 173956,
                "image_url": "//assets.supremenewyork.com/204576/ca/wUPbi13GPYM.jpg",
                "image_url_hi": "//assets.supremenewyork.com/204576/rc/wUPbi13GPYM.jpg",
                "price": 29800,
                "sale_price": 0,
                "new_item": false,
                "position": 11,
                "category_name": "Jackets"
            }
        ],
        "Hats": [
            {
                "name": "Mesh Seersucker Camp Cap",
                "id": 174039,
                "image_url": "//assets.supremenewyork.com/206774/ca/mKSCsqcbPIY.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206774/rc/mKSCsqcbPIY.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": true,
                "position": 36,
                "category_name": "Hats"
            },
            {
                "name": "World Famous 6-Panel",
                "id": 174042,
                "image_url": "//assets.supremenewyork.com/206827/ca/2h7lf3fFqG4.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206827/rc/2h7lf3fFqG4.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": true,
                "position": 38,
                "category_name": "Hats"
            },
            {
                "name": "Reverse Box Logo New Era®",
                "id": 174026,
                "image_url": "//assets.supremenewyork.com/206757/ca/ISPVWGBCbE8.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206757/rc/ISPVWGBCbE8.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": true,
                "position": 39,
                "category_name": "Hats"
            },
            {
                "name": "Faded Ripstop 6-Panel",
                "id": 173989,
                "image_url": "//assets.supremenewyork.com/206840/ca/L3k8Ims4aLA.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206840/rc/L3k8Ims4aLA.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": false,
                "position": 37,
                "category_name": "Hats"
            },
            {
                "name": "Overdyed Beanie",
                "id": 174004,
                "image_url": "//assets.supremenewyork.com/207098/ca/kntzOhsCKZY.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207098/rc/kntzOhsCKZY.jpg",
                "price": 3800,
                "sale_price": 0,
                "new_item": false,
                "position": 40,
                "category_name": "Hats"
            }
        ],
        "T-Shirts": [
            {
                "name": "Supreme®/HYSTERIC GLAMOUR L/S Tee",
                "id": 174005,
                "image_url": "//assets.supremenewyork.com/209215/ca/RNkQwwNZTW4.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209215/rc/RNkQwwNZTW4.jpg",
                "price": 5800,
                "sale_price": 0,
                "new_item": false,
                "position": 27,
                "category_name": "T-Shirts"
            }
        ],
        "Sweatshirts": [
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eIce Climb Hooded Sweatshirt",
                "id": 174037,
                "image_url": "//assets.supremenewyork.com/209728/ca/fNqdDUYuuDI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209728/rc/fNqdDUYuuDI.jpg",
                "price": 15800,
                "sale_price": 0,
                "new_item": true,
                "position": 3,
                "category_name": "Sweatshirts"
            },
            {
                "name": "Everlasting Hooded Sweatshirt",
                "id": 174040,
                "image_url": "//assets.supremenewyork.com/206281/ca/41JwEzL2PYc.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206281/rc/41JwEzL2PYc.jpg",
                "price": 15800,
                "sale_price": 0,
                "new_item": true,
                "position": 16,
                "category_name": "Sweatshirts"
            },
            {
                "name": "Hearts Arc Hooded Sweatshirt",
                "id": 174034,
                "image_url": "//assets.supremenewyork.com/206320/ca/-hYzWFlhAmI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206320/rc/-hYzWFlhAmI.jpg",
                "price": 16800,
                "sale_price": 0,
                "new_item": true,
                "position": 17,
                "category_name": "Sweatshirts"
            },
            {
                "name": "Supreme®/HYSTERIC GLAMOUR Crewneck",
                "id": 174008,
                "image_url": "//assets.supremenewyork.com/209251/ca/vNJbZoIhlMo.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209251/rc/vNJbZoIhlMo.jpg",
                "price": 15800,
                "sale_price": 0,
                "new_item": false,
                "position": 18,
                "category_name": "Sweatshirts"
            },
            {
                "name": "Supreme®/HYSTERIC GLAMOUR \u003cbr\u003eZip Up Hooded Sweatshirt",
                "id": 174006,
                "image_url": "//assets.supremenewyork.com/209234/ca/H3s_yqLkwoE.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209234/rc/H3s_yqLkwoE.jpg",
                "price": 17800,
                "sale_price": 0,
                "new_item": false,
                "position": 19,
                "category_name": "Sweatshirts"
            },
            {
                "name": "Embroidered S Hooded Sweatshirt",
                "id": 174021,
                "image_url": "//assets.supremenewyork.com/208109/ca/pwtF-j_lY1o.jpg",
                "image_url_hi": "//assets.supremenewyork.com/208109/rc/pwtF-j_lY1o.jpg",
                "price": 15800,
                "sale_price": 0,
                "new_item": false,
                "position": 20,
                "category_name": "Sweatshirts"
            }
        ],
        "Shorts": [
            {
                "name": "Arabic Logo Soccer Short",
                "id": 174029,
                "image_url": "//assets.supremenewyork.com/205909/ca/oHlVCaaU81Q.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205909/rc/oHlVCaaU81Q.jpg",
                "price": 9800,
                "sale_price": 0,
                "new_item": true,
                "position": 35,
                "category_name": "Shorts"
            }
        ],
        "new": [
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Mountain Light Jacket",
                "id": 174024,
                "image_url": "//assets.supremenewyork.com/209667/ca/qM_4XnTnDpI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209667/rc/qM_4XnTnDpI.jpg",
                "price": 38800,
                "sale_price": 0,
                "new_item": true,
                "position": 1,
                "category_name": "Jackets"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Nuptse Jacket",
                "id": 174038,
                "image_url": "//assets.supremenewyork.com/209657/ca/Mz0-4AdvLMk.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209657/rc/Mz0-4AdvLMk.jpg",
                "price": 39800,
                "sale_price": 0,
                "new_item": true,
                "position": 0,
                "category_name": "Jackets"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Nuptse Vest",
                "id": 174041,
                "image_url": "//assets.supremenewyork.com/209622/ca/rtWAeWqBUeU.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209622/rc/rtWAeWqBUeU.jpg",
                "price": 24800,
                "sale_price": 0,
                "new_item": true,
                "position": 2,
                "category_name": "Jackets"
            },
            {
                "name": "Spray Tartan Shirt",
                "id": 174035,
                "image_url": "//assets.supremenewyork.com/205086/ca/bEviZkG_p3c.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205086/rc/bEviZkG_p3c.jpg",
                "price": 13800,
                "sale_price": 0,
                "new_item": true,
                "position": 13,
                "category_name": "Shirts"
            },
            {
                "name": "Supreme®/The North Face® Ice Climb Tee",
                "id": 174022,
                "image_url": "//assets.supremenewyork.com/209731/ca/v7uTkuL-Lvo.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209731/rc/v7uTkuL-Lvo.jpg",
                "price": 7800,
                "sale_price": 0,
                "new_item": true,
                "position": 5,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Arabic Logo Soccer Jersey",
                "id": 174023,
                "image_url": "//assets.supremenewyork.com/206698/ca/t_Zo8QxGV9g.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206698/rc/t_Zo8QxGV9g.jpg",
                "price": 9800,
                "sale_price": 0,
                "new_item": true,
                "position": 21,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Inside Out Logo Sweater",
                "id": 174031,
                "image_url": "//assets.supremenewyork.com/204845/ca/7tfef5Bf0H8.jpg",
                "image_url_hi": "//assets.supremenewyork.com/204845/rc/7tfef5Bf0H8.jpg",
                "price": 14800,
                "sale_price": 0,
                "new_item": true,
                "position": 12,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Old English Collar Logo L/S Top",
                "id": 174032,
                "image_url": "//assets.supremenewyork.com/206702/ca/VFdz839I-A4.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206702/rc/VFdz839I-A4.jpg",
                "price": 8800,
                "sale_price": 0,
                "new_item": true,
                "position": 22,
                "category_name": "Tops/Sweaters"
            },
            {
                "name": "Hearts Arc Hooded Sweatshirt",
                "id": 174034,
                "image_url": "//assets.supremenewyork.com/206320/ca/-hYzWFlhAmI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206320/rc/-hYzWFlhAmI.jpg",
                "price": 16800,
                "sale_price": 0,
                "new_item": true,
                "position": 17,
                "category_name": "Sweatshirts"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eIce Climb Hooded Sweatshirt",
                "id": 174037,
                "image_url": "//assets.supremenewyork.com/209728/ca/fNqdDUYuuDI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209728/rc/fNqdDUYuuDI.jpg",
                "price": 15800,
                "sale_price": 0,
                "new_item": true,
                "position": 3,
                "category_name": "Sweatshirts"
            },
            {
                "name": "Everlasting Hooded Sweatshirt",
                "id": 174040,
                "image_url": "//assets.supremenewyork.com/206281/ca/41JwEzL2PYc.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206281/rc/41JwEzL2PYc.jpg",
                "price": 15800,
                "sale_price": 0,
                "new_item": true,
                "position": 16,
                "category_name": "Sweatshirts"
            },
            {
                "name": "Pleated Trouser",
                "id": 174030,
                "image_url": "//assets.supremenewyork.com/205557/ca/uXSR4i0QpzQ.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205557/rc/uXSR4i0QpzQ.jpg",
                "price": 16800,
                "sale_price": 0,
                "new_item": true,
                "position": 28,
                "category_name": "Pants"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Nuptse Pant",
                "id": 174043,
                "image_url": "//assets.supremenewyork.com/209637/ca/jsSnawsqWFg.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209637/rc/jsSnawsqWFg.jpg",
                "price": 22800,
                "sale_price": 0,
                "new_item": true,
                "position": 4,
                "category_name": "Pants"
            },
            {
                "name": "Arabic Logo Soccer Short",
                "id": 174029,
                "image_url": "//assets.supremenewyork.com/205909/ca/oHlVCaaU81Q.jpg",
                "image_url_hi": "//assets.supremenewyork.com/205909/rc/oHlVCaaU81Q.jpg",
                "price": 9800,
                "sale_price": 0,
                "new_item": true,
                "position": 35,
                "category_name": "Shorts"
            },
            {
                "name": "Reverse Box Logo New Era®",
                "id": 174026,
                "image_url": "//assets.supremenewyork.com/206757/ca/ISPVWGBCbE8.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206757/rc/ISPVWGBCbE8.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": true,
                "position": 39,
                "category_name": "Hats"
            },
            {
                "name": "Mesh Seersucker Camp Cap",
                "id": 174039,
                "image_url": "//assets.supremenewyork.com/206774/ca/mKSCsqcbPIY.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206774/rc/mKSCsqcbPIY.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": true,
                "position": 36,
                "category_name": "Hats"
            },
            {
                "name": "World Famous 6-Panel",
                "id": 174042,
                "image_url": "//assets.supremenewyork.com/206827/ca/2h7lf3fFqG4.jpg",
                "image_url_hi": "//assets.supremenewyork.com/206827/rc/2h7lf3fFqG4.jpg",
                "price": 4800,
                "sale_price": 0,
                "new_item": true,
                "position": 38,
                "category_name": "Hats"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Small Base Camp Duffle Bag",
                "id": 174027,
                "image_url": "//assets.supremenewyork.com/209715/ca/q2AVJ2dZLmU.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209715/rc/q2AVJ2dZLmU.jpg",
                "price": 16800,
                "sale_price": 0,
                "new_item": true,
                "position": 6,
                "category_name": "Bags"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Explore Utility Tote",
                "id": 174028,
                "image_url": "//assets.supremenewyork.com/209685/ca/JXsTgcfxdbI.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209685/rc/JXsTgcfxdbI.jpg",
                "price": 13800,
                "sale_price": 0,
                "new_item": true,
                "position": 7,
                "category_name": "Bags"
            },
            {
                "name": "Supreme®/Yashica MF-1 Camera",
                "id": 174025,
                "image_url": "//assets.supremenewyork.com/207412/ca/RFVnXu8oAuo.jpg",
                "image_url_hi": "//assets.supremenewyork.com/207412/rc/RFVnXu8oAuo.jpg",
                "price": 6800,
                "sale_price": 0,
                "new_item": true,
                "position": 47,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Nuptse Blanket",
                "id": 174036,
                "image_url": "//assets.supremenewyork.com/209608/ca/DJpdw-oG1mw.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209608/rc/DJpdw-oG1mw.jpg",
                "price": 29800,
                "sale_price": 0,
                "new_item": true,
                "position": 8,
                "category_name": "Accessories"
            },
            {
                "name": "Supreme®/The North Face® \u003cbr\u003eStudded Traction Mule",
                "id": 174033,
                "image_url": "//assets.supremenewyork.com/209704/ca/qlgxf2MmLMg.jpg",
                "image_url_hi": "//assets.supremenewyork.com/209704/rc/qlgxf2MmLMg.jpg",
                "price": 9800,
                "sale_price": 0,
                "new_item": true,
                "position": 9,
                "category_name": "Shoes"
            }
        ]
    },
    "last_mobile_api_update": "2015-02-06T14:47:32.034-05:00",
    "release_date": "03/26/2021",
    "release_week": "6SS21"
}
//  products_and_categories
//         Accessories
//         Pants
//         Bags
//         Tops/Sweaters
//         Skate 
//         Shoes 
//         Shirts 
//         Jackets 
//         Hats
//         T-Shirts 
//         Sweatshirts 
//         Shorts 
//                 new
//                 name
//                 id
//                 image_url 
//                 image_url_hi
//                 price
//                 sale_price 
//                 new_item
//                 category_name

var choices = []
var keywords = ["pant"]
var pC = data.products_and_categories
for (var pos in pC) {

    var products = pC[pos]

    for (var posProd in products) {
        var product = products[posProd]
        for (var namePos in keywords) {
            if (product.name.toLowerCase().includes(keywords[namePos])) {
                choices.push(
                    {
                        name: product.name,
                        category_name: product.category_name
                    }
                )
            }
        }
    }
}


const setLocation = (choice) => {
    chrome.storage.sync.get('category', (data) => {
        var redirect = "https://www.supremenewyork.com/shop/all/" + choice.category_name
        chrome.runtime.sendMessage({ redirect: redirect })

    })

}

const setItem = (item) => {
    chrome.storage.sync.get('item_name', (data) => {
        var items = document.getElementsByClassName('name-link')
        if (items) {
            for (var pos in items) {
                var curItem = items[pos]
                if (curItem != undefined) {
                    if ((curItem.innerHTML).toLowerCase() == item.toLowerCase()) {
                        chrome.runtime.sendMessage({ redirect: items[pos].href })
                        break;
                    }
                }
            }
        }
    })

}

var user = {
    name: "Jeff Barnum",
    email: "jeffbarnum96@yahoo.com",
    tel: 2022534845,
    address: "1234 Who street",
    zip: "28104",
    city: "New York",
    state: "NY",
    ccnum: "4767718398576118",
    month: "03",
    year: "2027",
    cvv: "847",

}

var start = Date.now()
var curlink = window.location.href;
var core = "https://www.supremenewyork.com/shop/"
var timeDelay = 4000;


function sleeper(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < millis);
}

sleeper(timeDelay);
if (curlink === core) {
    setLocation(choices[0])
}
if (curlink === "https://www.supremenewyork.com/shop") {
    var count = parseInt(document.getElementById("items-count").innerHTML[0])
    if (count) {
        document.querySelector("#cart > a.button.checkout").click()
    }
    else setItem(choices[0].name);


}
if (curlink.includes("all")) {
    setItem(choices[0].name)

}
if (!(curlink.includes("all")) && curlink.includes('shop')) {
    document.querySelector("#add-remove-buttons > input").click()
    sleeper(1000)
    document.querySelector("#cart > a.button.checkout").click()
}

if (curlink.includes("checkout")) {
    document.querySelector("#cart-cc > fieldset > p > label > div").click();
    sleeper(500)
    document.getElementById("order_billing_name").value = user.name;
    sleeper(500)
    document.getElementById("order_email").value = user.email;
    sleeper(500)
    document.getElementById("order_tel").value = user.tel;
    sleeper(500)
    document.getElementById("bo").value = user.address;
    sleeper(500)
    document.getElementById("order_billing_zip").value = user.zip;
    sleeper(500)
    document.getElementById("order_billing_city").value = user.city;
    sleeper(500)
    var selected = document.getElementById('order_billing_state').getElementsByTagName('option');
    sleeper(500)
    for (var pos in selected) {
        if (selected[pos].value == user.state) {
            selected[pos].selected = 'selected'
        }
    }
    sleeper(500)

    document.getElementById("rnsnckrn").value = user.ccnum;
    sleeper(500)
    var selected = document.getElementById("credit_card_month").getElementsByTagName('option')
    sleeper(500)
    for (var pos in selected) {
        if (selected[pos].value == user.month) {
            selected[pos].selected = 'selected'
        }
    }

    var selected = document.getElementById("credit_card_year").getElementsByTagName('option')
    sleeper(500)
    for (var pos in selected) {
        if (selected[pos].value == user.year) {
            selected[pos].selected = 'selected'
        }
    }
    document.getElementById("orcer").value = user.cvv;
    sleeper(500)

    document.querySelector("#pay > input").click()

}

var end = Date.now()

console.log(end - start)