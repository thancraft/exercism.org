def is_criticality_balanced(temperature, neutrons_emitted):
    return temperature < 800 and neutrons_emitted > 500 and (temperature * neutrons_emitted) < 500000

def reactor_efficiency(voltage, current, theoretical_max_power):
    genPower = voltage * current
    efektif = (genPower/theoretical_max_power) * 100
    if efektif >= 80:
        return "green"
    if efektif < 80 and efektif >= 60:
        return "orange"
    if efektif < 60 and efektif >= 30:
        return "red"
    if efektif < 30:
        return "black"
    pass

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    kritis = temperature * neutrons_produced_per_second
    titikAtas = 1.1 * threshold
    titikBawah = 0.9 * threshold
    if temperature * neutrons_produced_per_second < titikBawah:
        return 'LOW'
    if titikBawah <= kritis <= titikAtas:
        return 'NORMAL'
    return 'DANGER'
    pass
