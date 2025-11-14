"""
Functions to control and monitor a nuclear reactor.
"""

def is_criticality_balanced(temperature, neutrons_emitted):
    """
    Checks if the reactor's criticality is balanced.

    :param temperature: int, the reactor's temperature.
    :param neutrons_emitted: int, the number of neutrons emitted.
    :return: bool, True if balanced, False otherwise.
    """
    return temperature < 800 and neutrons_emitted > 500 and (temperature * neutrons_emitted) < 500000

def reactor_efficiency(voltage, current, theoretical_max_power):
    """
    Calculates the reactor's efficiency and returns a color code.

    :param voltage: float, voltage output.
    :param current: float, current output.
    :param theoretical_max_power: float, the maximum theoretical power.
    :return: str, color code ("green", "orange", "red", "black").
    """
    # FIX (C0103): Renamed 'genPower' to 'gen_power' for snake_case.
    gen_power = voltage * current
    efektif = (gen_power / theoretical_max_power) * 100

    # FIX (R1716, R1710, W0101, W0107):
    # Changed from 'if/if/if/if...pass' to 'if/elif/elif/else'.
    # This is more efficient, fixes the chained comparison warning,
    # ensures a value is always returned, and makes 'pass' unnecessary.
    if efektif >= 80:
        return "green"
    elif efektif >= 60:
        return "orange"
    elif efektif >= 30:
        return "red"
    else:
        return "black"
    # The 'pass' statement that was here is now unreachable and removed.

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    """
    Determines the reactor's safety status based on thermal output.

    :param temperature: int, the reactor's temperature.
    :param neutrons_produced_per_second: int, neutrons per second.
    :param threshold: int, the normal operating threshold.
    :return: str, safety status ("LOW", "NORMAL", "DANGER").
    """
    kritis = temperature * neutrons_produced_per_second
    
    # FIX (C0103): Renamed 'titikAtas' and 'titikBawah' for snake_case.
    titik_atas = 1.1 * threshold
    titik_bawah = 0.9 * threshold

    # FIX (W1405): Changed single quotes to double quotes for consistency.
    if kritis < titik_bawah:
        return "LOW"
    if titik_bawah <= kritis <= titik_atas:
        return "NORMAL"
    
    return "DANGER"
    # FIX (W0101, W0107): Removed unreachable 'pass' statement.