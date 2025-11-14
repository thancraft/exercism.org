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
    # Menghitung daya yang dihasilkan (generated power)
    gen_power = voltage * current
    # Menghitung efisiensi sebagai persentase
    efektif = (gen_power / theoretical_max_power) * 100

    # Mengembalikan kode warna berdasarkan tingkat efisiensi
    if efektif >= 80:
        return "green"
    
    if efektif >= 60:
        return "orange"
    
    if efektif >= 30:
        return "red"
        
    return "black"

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    """
    Determines the reactor's safety status based on thermal output.

    :param temperature: int, the reactor's temperature.
    :param neutrons_produced_per_second: int, neutrons per second.
    :param threshold: int, the normal operating threshold.
    :return: str, safety status ("LOW", "NORMAL", "DANGER").
    """
    # Menghitung produk kritis (suhu * neutron)
    kritis = temperature * neutrons_produced_per_second
    
    # Menentukan batas atas dan bawah dari ambang batas normal (threshold)
    titik_atas = 1.1 * threshold
    titik_bawah = 0.9 * threshold

    # Memeriksa status keamanan berdasarkan titik kritis
    if kritis < titik_bawah:
        return "LOW"
    if titik_bawah <= kritis <= titik_atas:
        return "NORMAL"
    
    return "DANGER"