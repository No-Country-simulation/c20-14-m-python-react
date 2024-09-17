# utils/luhn.py

class LuhnAlgorithm:
    @staticmethod
    def validate(card_number: str) -> bool:
        """
        Validate the card number using the Luhn algorithm.
        """
        card_number = card_number.replace(" ", "")
        if not card_number.isdigit():
            return False
        
        total = 0
        reverse_digits = card_number[::-1]
        
        for index, digit in enumerate(reverse_digits):
            n = int(digit)
            if index % 2 == 1:
                n *= 2
                if n > 9:
                    n -= 9
            total += n
        
        return total % 10 == 0
