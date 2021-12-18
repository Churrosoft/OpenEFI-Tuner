const codes = [
  {
    code: 'P0601',
    description: 'Internal Control Module Memory Check Sum Error',
    type: 'ERR',
    info: [
      'This diagnostic trouble code (DTC) is a generic powertrain code, which means that it applies to OBD-II equipped vehicles. Although generic, the specific repair steps may vary depending on make/model.',
      'Basically that means that there is an interal fault in the Powertrain Control Module (PCM). There have been many reported PCM failures on Chrysler/Dodge products although it is possible for this to happen on any vehicle.',
      '\n ',
      'In Dodge/Chrysler products, a P0601 trouble code means that a serial communication failed inside the computer at least 6 times.',
      'Other internal control module error trouble codes include:',
      'P0602 Control Module Programming Error\nP0603 Internal Control Module Keep Alive Memory (KAM) Error\nP0604 Internal Control Module Random Access Memory (RAM) Error\nP0605 Internal Control Module Read Only Memory (ROM) Error',
      'Photo of a PCM with the cover removed:\n',
    ],
    symptoms: [
      'Likely, no symptoms will be discernible to the driver, other than the illuminated Check Engine Light. Typically the engine runs fine, gauges work, etc.',
    ],
    causes: [
      'A code P0601 in most cases means the PCM has gone bad. This is possibly due to a short-circuit inside the PCM. Or, if you disconnect the wires/connector from the PCM while the battery is still connected, that may also cause this code.',
    ],
  },
  {
    code: 'P060A',
    type: 'WARN',
    description: 'Internal Control Module Monitoring Processor Performance',
    info: [
      'This generic powertrain diagnostic trouble code (DTC) typically applies to many OBD-II vehicles. That may include but is not limited to vehicles from Honda, Ford, Mercedes Benz, Nissan, Toyota, etc.',
      '\n ',
      'When a code P060A is stored, it means that the powertrain control module (PCM) has experienced an internal processor error. Other controllers may also detect a PCM processor performance error and cause a code of this type to be stored.',
      'The internal control module monitoring processors are responsible for various controller self-test duties and overall internal control module accountability. Internal controller (especially PCM) temperature, as well as multiple input and output signals are constantly monitored by specific controller processors.',
      'Whenever the ignition is on and the PCM is energized, numerous internal controller processing self-tests are initiated. In addition to running internal controller self-tests, the controller area network (CAN) also compares signals from each individual module to ensure that each controller is functioning properly. These tests are performed simultaneously.',
      'If the PCM detects a discrepancy between any of the on-board controllers, which would indicate an internal processor error, a code P060A will be stored and a malfunction indicator lamp (MIL) may be illuminated. Multiple failure cycles may be necessary for MIL illumination, depending upon the perceived severity of the malfunction.',
      'Photo of a PCM with the cover removed:\n',
    ],
    symptoms: [
      'Multiple drivability issues\nHarsh or erratic automatic transmission shifting\nReduction in fuel efficiency\nRough idle or stall\nHesitation upon acceleration',
    ],
    causes: [
      'Defective controller or programming error\nBad controller fuse or power supply relay\nOpen or shorted circuit or connectors in the CAN harness\nInsufficient control module ground',
    ],
  },
  {
    code: 'P0632',
    description: 'Odometer Not Programmed – ECM/PCM',
    info: [
      'This is a generic diagnostic trouble code (DTC) and applies to many OBD-II vehicles (1996-newer). That may include but is not limited to vehicles from Mercedes Benz, Ford, Dodge, Ram, Jeep, Hyundai, etc. Although generic, the exact repair steps may vary depending on year, make, model and powertrain configuration.',
      '\n ',
      'When a code P0632 is stored, it means that the engine control module (ECM) or powertrain control module (PCM) has detected an incorrect or non-existent odometer (mileage) reading.',
      'Since the inception of OBD-II diagnostic systems, a method of recording vehicle mileage has been programmed into each ECM/PCM. Other controllers (including the instrument panel control - IPC - module) may also be programmed to record mileage but a federal mandate demands that the ECM/PCM is programmed as such.',
      'The primary reason for government and auto industry insistence that the ECM/PCM be programmed to record mileage is to prevent odometer tampering. System controllers cannot be swapped between vehicles without being programmed with the correct vehicle mileage. If controllers could be randomly swapped between vehicles, odometer readings would be far less accurate if not totally unreliable. When an ECM/PCM is replaced, it must be programmed with the vehicle’s odometer reading and VIN (among other things).',
      'If the ECM/PCM fails to find or recognize an acceptable odometer reading, a code P0632 will be stored and a malfunction indicator lamp (MIL) may be illuminated. The ECM/PCM searches for the odometer reading and compares it with the IPC odometer figure each time the key is turned on and the self-test function is energized.',
      'Photo of a PCM with the cover removed:\n',
    ],
    symptoms: [
      'No (or intermittent) odometer display\nIncorrect odometer display\nErratic speedometer operation\nVehicle security system may be activated\nOther diagnostic codes will likely be stored',
    ],
    causes: [
      'ECM/PCM programming error\nECM/PCM swapped between vehicles and/or replaced without being properly programmed\nECM/PCM failure\nIPC programming error\nInstrument panel cluster replacement without proper reprogramming',
    ],
    type: 'INFO',
  },
  {
    code: 'P0648',
    description: 'Immobilizer Lamp Control Circuit',
    info: [
      'This is a generic diagnostic trouble code (DTC) and applies to many OBD-II vehicles (1996-newer). That may include but is not limited to vehicles from Acura, Buick, Chevrolet, Chrysler, Dodge, Ford, GMC, Hyundai, Kia, Honda, etc. Although generic, the exact repair steps may vary depending on year, make, model and powertrain configuration.',
      '\n ',
      'A stored code P0648 means that the powertrain control module (PCM) has detected a malfunction in the immobilizer lamp control circuit.',
      'The immobilizer lamp is contained in the instrument panel. Its primary function is to warn the driver that the immobilizer key has malfunctioned or is not recognized (when it is illuminated). This warning lamp is sometimes referred to as the security lamp.',
      'The PCM typically monitors the continuity of the immobilizer lamp control circuit whenever the ignition is turned on. The immobilizer key is equipped with a transponder that is recognized by the PCM (and other controllers) when it is in close proximity to the vehicle. This allows various systems (such as push-to-start and keyless entry) to remain functional and practical.',
      'Each time the ignition is turned on and the PCM is energized, multiple controller self-tests are performed. In addition to running internal controller self-tests, the controller area network (CAN) carries serial data from each individual module to ensure that on-board controllers are interfacing properly.',
      'If a problem is detected in monitoring the immobilizer lamp control circuit, a code P0648 will be stored and a malfunction indicator lamp (MIL) may be illuminated.',
      'A typical immobilizer lamp:\n',
    ],
    symptoms: [
      'No start\nImmobilizer lamp inoperative\nOther stored (security) codes',
    ],
    causes: [
      'Faulty PCM\nPCM programming error\nOpen or shorted immobilizer lamp control circuit\nDefective (dead battery) immobilizer key (fob)\nFailed immobilizer lamp bulb',
    ],
    type: 'ERR',
  },
  {
    code: 'P0642',
    description: 'Sensor Reference Voltage "A" Circuit Low',
    info: [
      'This diagnostic trouble code (DTC) is a generic powertrain code, which means that it applies to OBD-II equipped vehicles. Although generic, the specific repair steps may vary depending on make/model.',
      'If your OBD II equipped vehicle has a stored P0642, it means that the powertrain control module (PCM) has detected a low reference voltage signal for a particular sensor that has been given the designation "A". The sensor in question is usually associated with the automatic transmission, transfer case, or one of the differentials.',
      '\n ',
      'A more specific sensor code will almost always accompany this code. The P0642 adds that sensor reference circuit voltage is low. To determine the sensor location (and function), as it pertains to the vehicle in question, consult a reliable vehicle information source (All Data DIY is a great one). Suspect that a PCM programming error has occurred if the P0642 is stored alone. You will need to diagnose and repair any other sensor codes prior to diagnosing and repairing the P0642 - but keep the low reference voltage condition in mind.',
      'The sensor in question is supplied with reference voltage (typically five-volts) via a switched (energized with the key on) circuit. There will be a ground signal as well. The sensor is going to be of either the variable resistance or electromagnetic variety and it will complete the circuit. Sensor resistance should decrease as pressure, temperature, or speed is increased and vice versa. As the sensor resistance changes (with varying conditions) it provides the PCM with an input voltage signal.',
      'If the input voltage signal, received by the PCM, is lower than a programmed limit, a P0642 will be stored. A malfunction indicator lamp (MIL) may be also illuminated. Some vehicles will require multiple drive cycles (with a failure) for the MIL to be illuminated. Allow the PCM to enter readiness mode before considering any repair successful. Just clear the code, after repairs are performed, and drive the vehicle normally. If the PCM enters readiness mode, the repair was successful. If the code is reset, the PCM will not enter readiness mode and you know that a malfunction still exists.\n',
    ],
    symptoms: [
      'Failure of the transmission to shift between sport and economy modes\nTransmission shifting malfunctions\nDelayed (or no) transmission engagement\nFailure of the transmission to switch between all-wheel and two-wheel drive modes\nFailure of the transfer case to shift from low to high gear\nLack of front differential engagement\nLack of front hub engagement\nErratic or inoperative speedometer/odometer',
    ],
    causes: [
      'Possible causes for this engine code include:',
      'Bad sensor\nDefective or blown fuses and/or fusible links\nFaulty system power relay\nOpen circuits and/or connectors',
    ],
    type: 'WARN',
  },
];

export default codes;
