from abc import ABC, abstractmethod
class items(ABC):


{

    def __init__(self, sellin, quality):
        self.sellin = sellin
        self.quality = quality
    def update_quality(self, quality):
        pass
}


class normalitem (items):


{
    def __init__(self, sellin, quality):
    self.sellin = sellin
        self.quality = quality

    def update_quality(self, quality):
        if(self.quality > 0 and self.quality < 50):
            self.quality -= 2
    return quality

}


class AgedBrie (items):


{
    def __init__(self, sellin, quality):
    self.sellin = sellin
        self.quality = quality
    def update_quality(self, quality):
        if(self.quality > 0 and self.quality < 50):
            self.quality += 1
    return quality

}


class Backstage (items):


{
    def __init__(self, sellin, quality):
    self.sellin = sellin
        self.quality = quality

    def update_quality(self, quality):
    if(self.quality > 0 and self.quality < 50):
    if(self.sellin < 11):
    self.quality += 2
    elif(self.sellin < 6):
    self.quality += 3
    else:
    self.quality += 1
    return self.quality


}


class Sulfruse (items):


{
    def __init__(self, sellin, quality):
    self.sellin = sellin
        self.quality = quality

    def update_quality(quality):
        quality = 80
    return quality
}


class Conjured (items):


{
    def __init__(self, sellin, quality):
    self.sellin = sellin
        self.quality = quality

    def update_quality(quality):
        if(self.quality > 0 and self.quality < 50):
            self.quality -= 2
        return quality

}
