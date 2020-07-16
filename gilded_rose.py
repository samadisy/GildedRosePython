# -*- coding: utf-8 -*-

class GildedRose(object):

    def __init__(self, items):
        self.items = items

    def check_Quality_0(self,item):
        if item.quality > 0 and  "Sulfuras"not in  item.name :
                item.quality = item.quality - 1

    def check_Quality_50(self, item):
        if item.quality < 50:
            item.quality = item.quality + 1



    def update_quality(self):
        for item in self.items:
            if item.quality>50:
                item.quality=50
            if "Aged Brie" not in item.name and "Backstage" not in  item.name and "Conjured" not in item.name:
                GildedRose.check_Quality_0(self,item)
                print(item)
            else:
                if "Conjured" in item.name:
                    if (item.quality>1):
                     item.quality=item.quality-2
                    else:
                        item.quality=0
                    item.sell_in=item.sell_in-1
                    continue
                if item.quality < 50:
                    item.quality = item.quality + 1
                    if "Backstage" in item.name  and  item.sell_in < 11:
                        if item.sell_in<6:
                            item.quality = item.quality+1
                        item.quality = item.quality + 1
            if "Sulfuras" not in item.name :
                item.sell_in = item.sell_in - 1

            if item.sell_in <= 0 and item.quality!=0:
                if "Aged Brie" not  in item.name  and "Backstage" not in  item.name :
                    GildedRose.check_Quality_0(self,item)
                else:
                    GildedRose.check_Quality_50(self,item)

        print(self.items)

class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name
        self.sell_in = sell_in
        self.quality = quality

    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)
