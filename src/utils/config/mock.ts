export default `<?xml version="1.0" encoding="ISO-8859-1"?>
<msq xmlns="http://www.msefi.com/:msq">

<versionInfo fileFormat="5.0" firmwareInfo="rusEFI+v20220422%4037687" nPages="1" signature="rusEFI 2022.04.22.proteus_f4.384699743"/>
<page>
<pcVariable name="tsCanId">"0"</pcVariable>
<pcVariable digits="0" name="tuneCrcPcVariable">19200.0</pcVariable>
<pcVariable cols="1" digits="1" name="wueAfrTargetOffset" rows="16" units=":1">
         -1.5
         -1.4
         -1.1
         -0.9
         -0.8
         -0.6
         -0.6
         -0.5
         -0.4
         -0.4
         -0.3
         -0.2
         -0.2
         -0.1
         -0.1
         0.0
      </pcVariable>
<pcVariable cols="1" digits="0" name="wueAnalRecommend" rows="16" units="%">
         2.0
         2.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
      </pcVariable>
<pcVariable cols="1" digits="0" name="gearCountArray" rows="10" units="Gear">
         -1.0
         0.0
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
         7.0
         8.0
      </pcVariable>
<pcVariable cols="1" digits="0" name="solenoidCountArray" rows="6" units="Solenoid">
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
      </pcVariable>
</page>
<page number="0" size="21148">
<constant name="engineType">"MINIMAL_PINS"</constant>
<constant digits="0" name="sensorSnifferRpmThreshold" units="RPM">2500.0</constant>
<constant digits="2" name="rpmHardLimit" units="rpm">7500.0</constant>
<constant digits="2" name="launchRpm" units="rpm">3000.0</constant>
<constant digits="0" name="engineSnifferRpmThreshold" units="RPM">2500.0</constant>
<constant digits="0" name="multisparkMaxRpm" units="rpm">1500.0</constant>
<constant digits="0" name="maxAcRpm" units="rpm">5000.0</constant>
<constant digits="0" name="maxAcTps" units="%">75.0</constant>
<constant digits="0" name="maxAcClt" units="deg C">100.0</constant>
<constant cols="1" digits="2" name="knockNoiseRpmBins" rows="16" units="RPM">
         650.0
         700.0
         800.0
         1150.0
         1600.0
         2000.0
         2400.0
         2850.0
         3250.0
         3700.0
         4100.0
         4500.0
         4950.0
         5400.0
         6200.0
         7000.0
      </constant>
<constant cols="1" digits="0" name="unused28" rows="24">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant digits="0" name="multisparkMaxSparkingAngle" units="deg">30.0</constant>
<constant digits="0" name="multisparkMaxExtraSparkCount" units="count">3.0</constant>
<constant cols="1" digits="2" name="sparkDwellRpmBins" rows="8" units="RPM">
         0.0
         1000.0
         2000.0
         3000.0
         4000.0
         5000.0
         6000.0
         7000.0
      </constant>
<constant cols="1" digits="0" name="alignmentFill_at_62" rows="2" units="units">
         0.0
         0.0
      </constant>
<constant cols="1" digits="2" name="sparkDwellValues" rows="8" units="ms">
         2.5
         2.5
         2.5
         2.5
         2.5
         2.5
         2.5
         2.5
      </constant>
<constant digits="2" name="injector_flow" units="cm3/min">849.0</constant>
<constant cols="1" digits="2" name="injector_battLagCorrBins" rows="8" units="volts">
         8.0
         9.0
         10.0
         11.099976
         12.099976
         13.199951
         14.0
         15.0
      </constant>
<constant cols="1" digits="2" name="injector_battLagCorr" rows="8" units="ms">
         2.5499878
         1.973999
         1.6100006
         1.300003
         1.1600037
         1.0199966
         0.9700012
         0.9399986
      </constant>
<constant name="isForcedInduction">"false"</constant>
<constant name="useFordRedundantTps">"false"</constant>
<constant name="isVerboseAuxPid1">"false"</constant>
<constant name="overrideTriggerGaps">"false"</constant>
<constant name="enableFan1WithAc">"false"</constant>
<constant name="enableFan2WithAc">"false"</constant>
<constant name="disableFan1WhenStopped">"true"</constant>
<constant name="disableFan2WhenStopped">"true"</constant>
<constant name="enableTrailingSparks">"false"</constant>
<constant name="isCJ125Verbose">"false"</constant>
<constant name="cj125isUaDivided">"true"</constant>
<constant name="cj125isLsu49">"false"</constant>
<constant name="etb_use_two_wires">"false"</constant>
<constant name="isDoubleSolenoidIdle">"false"</constant>
<constant name="useEeprom">"false"</constant>
<constant name="cj125isUrDivided">"false"</constant>
<constant name="useCicPidForIdle">"false"</constant>
<constant name="useTLE8888_cranking_hack">"true"</constant>
<constant name="useInstantRpmForIdle">"false"</constant>
<constant name="useSeparateIdleTablesForCrankingTaper">"false"</constant>
<constant name="launchControlEnabled">"false"</constant>
<constant name="rollingLaunchEnabled">"false"</constant>
<constant name="antiLagEnabled">"false"</constant>
<constant name="useRunningMathForCranking">"Fuel Map"</constant>
<constant name="displayLogicLevelsInEngineSniffer">"true"</constant>
<constant name="useTLE8888_stepper">"false"</constant>
<constant name="enableMapEstimationTableFallback">"false"</constant>
<constant name="usescriptTableForCanSniffingFiltering">"false"</constant>
<constant name="verboseCan">"Do not print"</constant>
<constant name="artificialTestMisfire">"No thank you"</constant>
<constant name="issue_294_31">"nada_example"</constant>
<constant name="unusedBit_48_31">"false"</constant>
<constant digits="0" name="tpsMin" units="ADC">112.0</constant>
<constant digits="0" name="tpsMax" units="ADC">956.0</constant>
<constant digits="0" name="tpsErrorDetectionTooLow" units="%">-6.0</constant>
<constant digits="0" name="tpsErrorDetectionTooHigh" units="%">106.0</constant>
<constant digits="1" name="cranking_baseFuel" units="mg">5.0</constant>
<constant digits="0" name="cranking_rpm" units="RPM">300.0</constant>
<constant cols="1" digits="0" name="cranking_alignmentFill_at_6" rows="2" units="units">
         0.0
         0.0
      </constant>
<constant digits="0" name="unused184">0.0</constant>
<constant digits="1" name="ignitionDwellForCrankingMs" units="ms">4.0</constant>
<constant digits="0" name="etbRevLimitStart" units="rpm">0.0</constant>
<constant digits="0" name="etbRevLimitRange" units="rpm">0.0</constant>
<constant cols="1" digits="2" name="map_samplingAngleBins" rows="8">
         800.0
         1686.0
         2571.0
         3457.0
         4343.0
         5229.0
         6114.0
         7000.0
      </constant>
<constant cols="1" digits="2" name="map_samplingAngle" rows="8" units="deg">
         100.0
         104.0
         109.0
         113.0
         117.0
         121.0
         126.0
         130.0
      </constant>
<constant cols="1" digits="2" name="map_samplingWindowBins" rows="8">
         800.0
         1686.0
         2571.0
         3457.0
         4343.0
         5229.0
         6114.0
         7000.0
      </constant>
<constant cols="1" digits="2" name="map_samplingWindow" rows="8" units="deg">
         50.0
         50.0
         50.0
         50.0
         50.0
         50.0
         50.0
         50.0
      </constant>
<constant digits="2" name="map_sensor_lowValue" units="kpa">16.0</constant>
<constant digits="2" name="map_sensor_highValue" units="kpa">396.0</constant>
<constant name="map_sensor_type">"Custom"</constant>
<constant name="map_sensor_hwChannel">"Analog Volt 10"</constant>
<constant cols="1" digits="0" name="map_sensor_alignmentFill" rows="3" units="unit">
         0.0
         0.0
         0.0
      </constant>
<constant digits="1" name="clt_tempC_1" units="*C">-10.0</constant>
<constant digits="1" name="clt_tempC_2" units="*C">100.0</constant>
<constant digits="1" name="clt_tempC_3" units="*C">140.0</constant>
<constant digits="1" name="clt_resistance_1" units="Ohm">961.0</constant>
<constant digits="1" name="clt_resistance_2" units="Ohm">1385.0</constant>
<constant digits="1" name="clt_resistance_3" units="Ohm">1536.0</constant>
<constant digits="1" name="clt_bias_resistor" units="Ohm">2700.0</constant>
<constant name="clt_adcChannel">"Analog Temp 1"</constant>
<constant cols="1" digits="0" name="clt_alignmentFill_at_29" rows="3" units="units">
         0.0
         0.0
         0.0
      </constant>
<constant digits="1" name="iat_tempC_1" units="*C">-10.0</constant>
<constant digits="1" name="iat_tempC_2" units="*C">20.0</constant>
<constant digits="1" name="iat_tempC_3" units="*C">50.0</constant>
<constant digits="1" name="iat_resistance_1" units="Ohm">11000.0</constant>
<constant digits="1" name="iat_resistance_2" units="Ohm">2560.0</constant>
<constant digits="1" name="iat_resistance_3" units="Ohm">750.0</constant>
<constant digits="1" name="iat_bias_resistor" units="Ohm">2700.0</constant>
<constant name="iat_adcChannel">"Analog Temp 2"</constant>
<constant cols="1" digits="0" name="iat_alignmentFill_at_29" rows="3" units="units">
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="launchTimingRetard" units="deg">10.0</constant>
<constant digits="0" name="hip9011PrescalerAndSDO" units="integer">0.0</constant>
<constant digits="2" name="knockBandCustom" units="kHz">3.0</constant>
<constant digits="2" name="displacement" units="L">2.3320007</constant>
<constant digits="0" name="cylindersCount">4.0</constant>
<constant name="firingOrder">"1-4-3-2"</constant>
<constant digits="2" name="cylinderBore" units="mm">94.0</constant>
<constant name="fuelAlgorithm">"Alpha-N"</constant>
<constant name="crankingInjectionMode">"Simultaneous"</constant>
<constant name="injectionMode">"Sequential"</constant>
<constant digits="2" name="extraInjectionOffset" units="deg">0.0</constant>
<constant digits="0" name="crankingTimingAngle" units="deg">10.0</constant>
<constant name="ignitionMode">"Individual Coils"</constant>
<constant digits="0" name="gapTrackingLengthOverride" units="count">0.0</constant>
<constant digits="0" name="maxIdleVss" units="kph">0.0</constant>
<constant digits="0" name="minOilPressureAfterStart" units="kPa">0.0</constant>
<constant name="timingMode">"dynamic"</constant>
<constant digits="0" name="fixedModeTiming" units="RPM">50.0</constant>
<constant digits="0" name="globalTriggerAngleOffset" units="deg btdc">287.0</constant>
<constant digits="2" name="analogInputDividerCoefficient" units="coef">1.56</constant>
<constant digits="2" name="vbattDividerCoeff" units="coef">9.2</constant>
<constant digits="0" name="fanOnTemperature" units="deg C">95.0</constant>
<constant digits="0" name="fanOffTemperature" units="deg C">91.0</constant>
<constant digits="1" name="driveWheelRevPerKm" units="revs/km">500.0</constant>
<constant name="canNbcType">"None"</constant>
<constant digits="2" name="canSleepPeriodMs" units="ms">50.0</constant>
<constant digits="0" name="weHaveUnusedHere" units="index">1.0</constant>
<constant name="displayMode">"none"</constant>
<constant digits="0" name="byFirmwareVersion" units="index">2.0220422E7</constant>
<constant digits="0" name="HD44780width" units="index">20.0</constant>
<constant digits="0" name="HD44780height" units="index">4.0</constant>
<constant name="tps1_1AdcChannel">"Analog Volt 3"</constant>
<constant name="vbattAdcChannel">"Battery Sense"</constant>
<constant name="fuelLevelSensor">"NONE"</constant>
<constant name="tps2_1AdcChannel">"Analog Volt 7"</constant>
<constant digits="4" name="idle_derivativeFilterLoss" units="x">0.099999905</constant>
<constant digits="0" name="trailingSparkAngle" units="angle">10.0</constant>
<constant name="trigger_type">"36/1"</constant>
<constant name="trigger_todoRemoveMeOneDay0">"false"</constant>
<constant name="trigger_todoRemoveMeOneDay1">"false"</constant>
<constant name="trigger_useOnlyFirstChannel">"false"</constant>
<constant name="trigger_unusedBit_4_3">"false"</constant>
<constant name="trigger_unusedBit_4_4">"false"</constant>
<constant name="trigger_unusedBit_4_5">"false"</constant>
<constant name="trigger_unusedBit_4_6">"false"</constant>
<constant name="trigger_unusedBit_4_7">"false"</constant>
<constant name="trigger_unusedBit_4_8">"false"</constant>
<constant name="trigger_unusedBit_4_9">"false"</constant>
<constant name="trigger_unusedBit_4_10">"false"</constant>
<constant name="trigger_unusedBit_4_11">"false"</constant>
<constant name="trigger_unusedBit_4_12">"false"</constant>
<constant name="trigger_unusedBit_4_13">"false"</constant>
<constant name="trigger_unusedBit_4_14">"false"</constant>
<constant name="trigger_unusedBit_4_15">"false"</constant>
<constant name="trigger_unusedBit_4_16">"false"</constant>
<constant name="trigger_unusedBit_4_17">"false"</constant>
<constant name="trigger_unusedBit_4_18">"false"</constant>
<constant name="trigger_unusedBit_4_19">"false"</constant>
<constant name="trigger_unusedBit_4_20">"false"</constant>
<constant name="trigger_unusedBit_4_21">"false"</constant>
<constant name="trigger_unusedBit_4_22">"false"</constant>
<constant name="trigger_unusedBit_4_23">"false"</constant>
<constant name="trigger_unusedBit_4_24">"false"</constant>
<constant name="trigger_unusedBit_4_25">"false"</constant>
<constant name="trigger_unusedBit_4_26">"false"</constant>
<constant name="trigger_unusedBit_4_27">"false"</constant>
<constant name="trigger_unusedBit_4_28">"false"</constant>
<constant name="trigger_unusedBit_4_29">"false"</constant>
<constant name="trigger_unusedBit_4_30">"false"</constant>
<constant name="trigger_unusedBit_4_31">"false"</constant>
<constant digits="0" name="trigger_customTotalToothCount" units="number">0.0</constant>
<constant digits="0" name="trigger_customSkippedToothCount" units="number">0.0</constant>
<constant name="hip9011SpiDevice">"Off"</constant>
<constant digits="0" name="failedMapFallback" units="kPa">0.0</constant>
<constant digits="0" name="boostControlSafeDutyCycle" units="%">0.0</constant>
<constant name="mafAdcChannel">"NONE"</constant>
<constant digits="2" name="globalFuelCorrection" units="coef">1.0</constant>
<constant digits="3" name="adcVcc" units="volts">3.3</constant>
<constant digits="0" name="mapCamDetectionAnglePosition" units="Deg">0.0</constant>
<constant name="camInputs1">"VR 2"</constant>
<constant name="camInputs2">"NONE"</constant>
<constant name="camInputs3">"NONE"</constant>
<constant name="camInputs4">"NONE"</constant>
<constant name="afr_hwChannel">"Analog Volt 11"</constant>
<constant cols="1" digits="0" name="afr_alignmentFill_afr" rows="3" units="unit">
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="afr_v1" units="volts">0.0</constant>
<constant digits="2" name="afr_value1" units="AFR">7.4</constant>
<constant digits="2" name="afr_v2" units="volts">5.0</constant>
<constant digits="2" name="afr_value2" units="AFR">22.4</constant>
<constant name="throttlePedalPositionAdcChannel">"Analog Volt 1"</constant>
<constant name="tle6240_cs">"NONE"</constant>
<constant name="tle6240_csPinMode">"default"</constant>
<constant name="throttlePedalUpPin">"NONE"</constant>
<constant digits="2" name="baroSensor_lowValue" units="kpa">16.0</constant>
<constant digits="2" name="baroSensor_highValue" units="kpa">396.0</constant>
<constant name="baroSensor_type">"Custom"</constant>
<constant name="baroSensor_hwChannel">"NONE"</constant>
<constant cols="1" digits="0" name="baroSensor_alignmentFill" rows="3" units="unit">
         0.0
         0.0
         0.0
      </constant>
<constant digits="0" name="idle_solenoidFrequency" units="Hz">200.0</constant>
<constant name="idle_solenoidPin">"NONE"</constant>
<constant name="idle_stepperDirectionPin">"NONE"</constant>
<constant name="idle_stepperStepPin">"NONE"</constant>
<constant name="idle_solenoidPinMode">"default"</constant>
<constant digits="0" name="manIdlePosition" units="%">30.0</constant>
<constant digits="1" name="knockRetardAggression" units="%">0.0</constant>
<constant digits="1" name="knockRetardReapplyRate" units="deg/s">0.0</constant>
<constant digits="0" name="knockRetardMaximum" units="deg">0.0</constant>
<constant digits="0" name="vssFilterReciprocal">0.0</constant>
<constant digits="3" name="vssGearRatio" units="ratio">3.73</constant>
<constant digits="0" name="vssToothCount" units="count">21.0</constant>
<constant name="l9779_cs">"NONE"</constant>
<constant digits="0" name="triggerSimulatorFrequency" units="Rpm">2000.0</constant>
<constant name="injectionPins1">"Lowside 1"</constant>
<constant name="injectionPins2">"Lowside 2"</constant>
<constant name="injectionPins3">"Lowside 3"</constant>
<constant name="injectionPins4">"Lowside 4"</constant>
<constant name="injectionPins5">"Lowside 5"</constant>
<constant name="injectionPins6">"Lowside 6"</constant>
<constant name="injectionPins7">"Lowside 7"</constant>
<constant name="injectionPins8">"Lowside 8"</constant>
<constant name="injectionPins9">"Lowside 9"</constant>
<constant name="injectionPins10">"Lowside 10"</constant>
<constant name="injectionPins11">"Lowside 11"</constant>
<constant name="injectionPins12">"Lowside 12"</constant>
<constant name="ignitionPins1">"Ign 1"</constant>
<constant name="ignitionPins2">"Ign 2"</constant>
<constant name="ignitionPins3">"Ign 3"</constant>
<constant name="ignitionPins4">"Ign 4"</constant>
<constant name="ignitionPins5">"Ign 5"</constant>
<constant name="ignitionPins6">"Ign 6"</constant>
<constant name="ignitionPins7">"Ign 7"</constant>
<constant name="ignitionPins8">"Ign 8"</constant>
<constant name="ignitionPins9">"Ign 9"</constant>
<constant name="ignitionPins10">"Ign 10"</constant>
<constant name="ignitionPins11">"Ign 11"</constant>
<constant name="ignitionPins12">"Ign 12"</constant>
<constant name="injectionPinMode">"default"</constant>
<constant name="ignitionPinMode">"default"</constant>
<constant name="HD44780_rs">"NONE"</constant>
<constant name="HD44780_e">"NONE"</constant>
<constant name="HD44780_db4">"NONE"</constant>
<constant name="HD44780_db5">"NONE"</constant>
<constant name="HD44780_db6">"NONE"</constant>
<constant name="HD44780_db7">"NONE"</constant>
<constant name="gps_rx_pin">"NONE"</constant>
<constant name="gps_tx_pin">"NONE"</constant>
<constant name="fuelPumpPin">"Lowside 15"</constant>
<constant name="fuelPumpPinMode">"default"</constant>
<constant name="malfunctionIndicatorPin">"NONE"</constant>
<constant name="malfunctionIndicatorPinMode">"default"</constant>
<constant name="fanPinMode">"default"</constant>
<constant name="fanPin">"NONE"</constant>
<constant name="clutchDownPin">"NONE"</constant>
<constant name="alternatorControlPin">"NONE"</constant>
<constant name="alternatorControlPinMode">"default"</constant>
<constant name="clutchDownPinMode">"PULLUP"</constant>
<constant name="digitalPotentiometerChipSelect1">"NONE"</constant>
<constant name="digitalPotentiometerChipSelect2">"NONE"</constant>
<constant name="digitalPotentiometerChipSelect3">"NONE"</constant>
<constant name="digitalPotentiometerChipSelect4">"NONE"</constant>
<constant name="electronicThrottlePin1Mode">"default"</constant>
<constant name="wboHeaterPin">"NONE"</constant>
<constant name="cj125CsPin">"NONE"</constant>
<constant name="max31855spiDevice">"Off"</constant>
<constant name="debugTriggerSync">"NONE"</constant>
<constant name="digitalPotentiometerSpiDevice">"Off"</constant>
<constant name="mc33972_cs">"NONE"</constant>
<constant name="mc33972_csPinMode">"default"</constant>
<constant name="auxFastSensor1_adcChannel">"NONE"</constant>
<constant name="tps1_2AdcChannel">"Analog Volt 4"</constant>
<constant name="tps2_2AdcChannel">"Analog Volt 8"</constant>
<constant name="throttlePedalPositionSecondAdcChannel">"Analog Volt 2"</constant>
<constant cols="1" digits="0" name="fuelLevelValues" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         160.0
         64.0
      </constant>
<constant name="afr_type">"Innovate"</constant>
<constant digits="4" name="idle_antiwindupFreq" units="x">0.099999905</constant>
<constant name="triggerInputPins1">"VR 1"</constant>
<constant name="triggerInputPins2">"NONE"</constant>
<constant name="triggerInputPins3">"NONE"</constant>
<constant name="hip9011CsPinMode">"default"</constant>
<constant name="tachOutputPin">"NONE"</constant>
<constant name="tachOutputPinMode">"default"</constant>
<constant name="mainRelayPin">"NONE"</constant>
<constant name="sdCardCsPin">"PD2"</constant>
<constant name="canTxPin">"PD1"</constant>
<constant name="canRxPin">"PD0"</constant>
<constant name="throttlePedalUpPinMode">"DEFAULT"</constant>
<constant digits="0" name="acIdleExtraOffset" units="%">0.0</constant>
<constant digits="2" name="finalGearRatio" units="ratio">0.0</constant>
<constant name="tcuInputSpeedSensorPin">"NONE"</constant>
<constant digits="0" name="tcuInputSpeedSensorTeeth">0.0</constant>
<constant digits="0" name="wastegatePositionMin" units="mv">0.0</constant>
<constant digits="0" name="wastegatePositionMax" units="mv">0.0</constant>
<constant digits="0" name="idlePositionMin" units="mv">0.0</constant>
<constant digits="0" name="idlePositionMax" units="mv">0.0</constant>
<constant digits="0" name="tunerStudioSerialSpeed" units="BPs">38400.0</constant>
<constant digits="1" name="compressionRatio" units="CR">12.400024</constant>
<constant name="triggerSimulatorPins1">"NONE"</constant>
<constant name="triggerSimulatorPins2">"NONE"</constant>
<constant name="triggerSimulatorPins3">"NONE"</constant>
<constant name="triggerSimulatorPinModes1">"default"</constant>
<constant name="triggerSimulatorPinModes2">"default"</constant>
<constant name="triggerSimulatorPinModes3">"default"</constant>
<constant name="o2heaterPin">"NONE"</constant>
<constant name="o2heaterPinModeTodO">"default"</constant>
<constant name="is_enabled_spi_1">"false"</constant>
<constant name="is_enabled_spi_2">"false"</constant>
<constant name="is_enabled_spi_3">"true"</constant>
<constant name="isSdCardEnabled">"true"</constant>
<constant name="rusefiVerbose29b">"11 bit"</constant>
<constant name="isEngineControlEnabled">"true"</constant>
<constant name="isHip9011Enabled">"false"</constant>
<constant name="isVerboseAlternator">"false"</constant>
<constant name="useSerialPort">"false"</constant>
<constant name="useStepperIdle">"false"</constant>
<constant name="enabledStep1Limiter">"false"</constant>
<constant name="useTpicAdvancedMode">"false"</constant>
<constant name="useLcdScreen">"true"</constant>
<constant name="verboseTLE8888">"false"</constant>
<constant name="enableVerboseCanTx">"false"</constant>
<constant name="onOffAlternatorLogic">"false"</constant>
<constant name="isCJ125Enabled">"false"</constant>
<constant name="vvtCamSensorUseRise">"Rising"</constant>
<constant name="measureMapOnlyInOneCylinder">"false"</constant>
<constant name="stepperForceParkingEveryRestart">"false"</constant>
<constant name="isFasterEngineSpinUpEnabled">"true"</constant>
<constant name="coastingFuelCutEnabled">"true"</constant>
<constant name="useIacTableForCoasting">"true"</constant>
<constant name="useNoiselessTriggerDecoder">"false"</constant>
<constant name="useIdleTimingPidControl">"false"</constant>
<constant name="disableEtbWhenEngineStopped">"false"</constant>
<constant name="is_enabled_spi_4">"false"</constant>
<constant name="pauseEtbControl">"false"</constant>
<constant name="alignEngineSnifferAtTDC">"false"</constant>
<constant name="useETBforIdleControl">"true"</constant>
<constant name="idleIncrementalPidCic">"false"</constant>
<constant name="enableAemXSeries">"false"</constant>
<constant name="logicAnalyzerPins1">"NONE"</constant>
<constant name="logicAnalyzerPins2">"NONE"</constant>
<constant name="logicAnalyzerPins3">"NONE"</constant>
<constant name="logicAnalyzerPins4">"NONE"</constant>
<constant name="mainRelayPinMode">"default"</constant>
<constant name="hip9011CsPin">"NONE"</constant>
<constant name="hip9011IntHoldPin">"NONE"</constant>
<constant name="hip9011IntHoldPinMode">"default"</constant>
<constant digits="0" name="verboseCanBaseAddress">512.0</constant>
<constant digits="0" name="mc33_hvolt" units="v">0.0</constant>
<constant digits="0" name="minimumBoostClosedLoopMap" units="kPa">0.0</constant>
<constant name="acFanPin">"NONE"</constant>
<constant name="acFanPinMode">"default"</constant>
<constant name="l9779spiDevice">"Off"</constant>
<constant cols="1" digits="1" name="dwellVoltageCorrVoltBins" rows="8" units="volts">
         7.0
         8.9
         10.7
         12.6
         14.4
         16.3
         18.1
         20.0
      </constant>
<constant name="imuType">"None"</constant>
<constant cols="1" digits="2" name="dwellVoltageCorrValues" rows="8" units="multiplier">
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
      </constant>
<constant digits="0" name="vehicleWeight" units="kg">770.0</constant>
<constant digits="0" name="idlePidRpmUpperLimit" units="RPM">500.0</constant>
<constant digits="3" name="applyNonlinearBelowPulse" units="ms">0.0</constant>
<constant name="lps25BaroSensorScl">"PB10"</constant>
<constant name="lps25BaroSensorSda">"PB11"</constant>
<constant name="vehicleSpeedSensorInputPin">"NONE"</constant>
<constant name="clutchUpPin">"NONE"</constant>
<constant name="injectorNonlinearMode">"None"</constant>
<constant name="clutchUpPinMode">"PULLUP"</constant>
<constant name="max31855_cs1">"NONE"</constant>
<constant name="max31855_cs2">"NONE"</constant>
<constant name="max31855_cs3">"NONE"</constant>
<constant name="max31855_cs4">"NONE"</constant>
<constant name="max31855_cs5">"NONE"</constant>
<constant name="max31855_cs6">"NONE"</constant>
<constant name="max31855_cs7">"NONE"</constant>
<constant name="max31855_cs8">"NONE"</constant>
<constant name="flexSensorPin">"NONE"</constant>
<constant name="test557pin">"NONE"</constant>
<constant name="stepperDirectionPinMode">"default"</constant>
<constant name="mc33972spiDevice">"Off"</constant>
<constant digits="1" name="stoichRatioSecondary" units=":1">0.0</constant>
<constant digits="0" name="etbMaximumPosition" units="%">95.0</constant>
<constant digits="0" name="sdCardPeriodMs" units="ms">10.0</constant>
<constant name="idlePositionSensor">"NONE"</constant>
<constant name="debugMapAveraging">"NONE"</constant>
<constant name="starterRelayDisablePin">"NONE"</constant>
<constant name="starterRelayDisablePinMode">"default"</constant>
<constant name="secondSolenoidPin">"NONE"</constant>
<constant name="startStopButtonPin">"NONE"</constant>
<constant digits="0" name="mapMinBufferLength" units="count">4.0</constant>
<constant digits="0" name="idlePidDeactivationTpsThreshold" units="%">1.0</constant>
<constant digits="0" name="stepperParkingExtraSteps" units="%">0.0</constant>
<constant digits="0" name="tps1SecondaryMin" units="ADC">896.0</constant>
<constant digits="0" name="tps1SecondaryMax" units="ADC">52.0</constant>
<constant digits="0" name="antiLagRpmTreshold" units="rpm">0.0</constant>
<constant digits="0" name="startCrankingDuration" units="Seconds">7.0</constant>
<constant name="triggerErrorPin">"NONE"</constant>
<constant name="triggerErrorPinMode">"default"</constant>
<constant name="acRelayPin">"NONE"</constant>
<constant name="acRelayPinMode">"default"</constant>
<constant digits="2" name="scriptSetting1">0.0</constant>
<constant digits="2" name="scriptSetting2">0.0</constant>
<constant digits="2" name="scriptSetting3">0.0</constant>
<constant digits="2" name="scriptSetting4">0.0</constant>
<constant digits="2" name="scriptSetting5">0.0</constant>
<constant digits="2" name="scriptSetting6">0.0</constant>
<constant digits="2" name="scriptSetting7">0.0</constant>
<constant digits="2" name="scriptSetting8">0.0</constant>
<constant name="spi1mosiPin">"NONE"</constant>
<constant name="spi1misoPin">"NONE"</constant>
<constant name="spi1sckPin">"NONE"</constant>
<constant name="spi2mosiPin">"NONE"</constant>
<constant name="spi2misoPin">"NONE"</constant>
<constant name="spi2sckPin">"NONE"</constant>
<constant name="spi3mosiPin">"PC12"</constant>
<constant name="spi3misoPin">"PC11"</constant>
<constant name="spi3sckPin">"PC10"</constant>
<constant name="cdmInputPin">"NONE"</constant>
<constant name="joystickCenterPin">"NONE"</constant>
<constant name="joystickAPin">"NONE"</constant>
<constant name="joystickBPin">"NONE"</constant>
<constant name="joystickCPin">"NONE"</constant>
<constant name="joystickDPin">"NONE"</constant>
<constant name="consoleUartDevice">"Off"</constant>
<constant name="sensorChartMode">"none"</constant>
<constant name="mafSensorType">"v1"</constant>
<constant name="clutchUpPinInverted">"false"</constant>
<constant name="clutchDownPinInverted">"false"</constant>
<constant name="useHbridgesToDriveIdleStepper">"false"</constant>
<constant name="multisparkEnable">"true"</constant>
<constant name="enableLaunchRetard">"false"</constant>
<constant name="unfinishedenableLaunchBoost">"false"</constant>
<constant name="unfinishedlaunchDisableBySpeed">"false"</constant>
<constant name="enableCanVss">"false"</constant>
<constant name="enableInnovateLC2">"false"</constant>
<constant name="showHumanReadableWarning">"false"</constant>
<constant name="stftIgnoreErrorMagnitude">"false"</constant>
<constant name="tempBooleanForVerySpecialCases">"false"</constant>
<constant name="enableSoftwareKnock">"true"</constant>
<constant name="verboseVVTDecoding">"false"</constant>
<constant name="invertCamVVTSignal">"false"</constant>
<constant name="consumeObdSensors">"false"</constant>
<constant name="knockBankCyl1">"Channel 1"</constant>
<constant name="knockBankCyl2">"Channel 1"</constant>
<constant name="knockBankCyl3">"Channel 1"</constant>
<constant name="knockBankCyl4">"Channel 1"</constant>
<constant name="knockBankCyl5">"Channel 1"</constant>
<constant name="knockBankCyl6">"Channel 1"</constant>
<constant name="knockBankCyl7">"Channel 1"</constant>
<constant name="knockBankCyl8">"Channel 1"</constant>
<constant name="knockBankCyl9">"Channel 1"</constant>
<constant name="knockBankCyl10">"Channel 1"</constant>
<constant name="knockBankCyl11">"Channel 1"</constant>
<constant name="knockBankCyl12">"Channel 1"</constant>
<constant name="tcuEnabled">"false"</constant>
<constant name="canBroadcastUseChannelTwo">"first"</constant>
<constant name="useRawOutputToDriveIdleStepper">"false"</constant>
<constant name="verboseCan2">"Do not print"</constant>
<constant name="etbIo1_directionPin1">"PD10"</constant>
<constant name="etbIo1_directionPin2">"NONE"</constant>
<constant name="etbIo1_controlPin">"PD12"</constant>
<constant name="etbIo1_disablePin">"PD11"</constant>
<constant name="etbIo2_directionPin1">"PD9"</constant>
<constant name="etbIo2_directionPin2">"NONE"</constant>
<constant name="etbIo2_controlPin">"PD13"</constant>
<constant name="etbIo2_disablePin">"PD8"</constant>
<constant name="boostControlPin">"NONE"</constant>
<constant name="boostControlPinMode">"default"</constant>
<constant name="antiLagActivatePin">"NONE"</constant>
<constant name="launchActivatePin">"NONE"</constant>
<constant digits="4" name="boostPid_pFactor">0.5</constant>
<constant digits="4" name="boostPid_iFactor">0.29999924</constant>
<constant digits="4" name="boostPid_dFactor">0.0</constant>
<constant digits="0" name="boostPid_offset">0.0</constant>
<constant digits="0" name="boostPid_periodMs" units="ms">100.0</constant>
<constant digits="0" name="boostPid_minValue">-99.0</constant>
<constant digits="0" name="boostPid_maxValue">99.0</constant>
<constant name="boostType">"Open Loop"</constant>
<constant digits="0" name="boostPwmFrequency" units="Hz">55.0</constant>
<constant name="launchActivationMode">"Launch Button"</constant>
<constant name="antiLagActivationMode">"Always Active"</constant>
<constant digits="0" name="launchSpeedThreshold" units="Kph">30.0</constant>
<constant digits="0" name="launchTimingRpmRange" units="RPM">500.0</constant>
<constant digits="0" name="launchFuelAdded" units="%">0.0</constant>
<constant digits="0" name="launchBoostDuty" units="%">0.0</constant>
<constant digits="2" name="hardCutRpmRange" units="rpm">500.0</constant>
<constant digits="0" name="launchAdvanceRpmRange" units="rpm">0.0</constant>
<constant digits="0" name="launchTpsTreshold" units="rpm">0.0</constant>
<constant digits="0" name="launchActivateDelay" units="rpm">0.0</constant>
<constant digits="0" name="stft_maxIdleRegionRpm" units="RPM">1000.0</constant>
<constant digits="0" name="stft_maxOverrunLoad" units="load">35.0</constant>
<constant digits="0" name="stft_minPowerLoad" units="load">85.0</constant>
<constant digits="1" name="stft_deadband" units="%">0.5</constant>
<constant digits="0" name="stft_minClt" units="C">60.0</constant>
<constant digits="1" name="stft_minAfr" units="afr">12.0</constant>
<constant digits="1" name="stft_maxAfr" units="afr">17.0</constant>
<constant digits="0" name="stft_startupDelay" units="seconds">60.0</constant>
<constant digits="0" name="stft_cellCfgs1_maxAdd" units="%">5.0</constant>
<constant digits="0" name="stft_cellCfgs1_maxRemove" units="%">-5.0</constant>
<constant digits="2" name="stft_cellCfgs1_timeConstant" units="sec">30.0</constant>
<constant digits="0" name="stft_cellCfgs2_maxAdd" units="%">5.0</constant>
<constant digits="0" name="stft_cellCfgs2_maxRemove" units="%">-5.0</constant>
<constant digits="2" name="stft_cellCfgs2_timeConstant" units="sec">30.0</constant>
<constant digits="0" name="stft_cellCfgs3_maxAdd" units="%">5.0</constant>
<constant digits="0" name="stft_cellCfgs3_maxRemove" units="%">-5.0</constant>
<constant digits="2" name="stft_cellCfgs3_timeConstant" units="sec">30.0</constant>
<constant digits="0" name="stft_cellCfgs4_maxAdd" units="%">5.0</constant>
<constant digits="0" name="stft_cellCfgs4_maxRemove" units="%">-5.0</constant>
<constant digits="2" name="stft_cellCfgs4_timeConstant" units="sec">30.0</constant>
<constant name="stepperDcIo1_directionPin1">"NONE"</constant>
<constant name="stepperDcIo1_directionPin2">"NONE"</constant>
<constant name="stepperDcIo1_controlPin">"NONE"</constant>
<constant name="stepperDcIo1_disablePin">"NONE"</constant>
<constant name="stepperDcIo2_directionPin1">"NONE"</constant>
<constant name="stepperDcIo2_directionPin2">"NONE"</constant>
<constant name="stepperDcIo2_controlPin">"NONE"</constant>
<constant name="stepperDcIo2_disablePin">"NONE"</constant>
<constant name="engineMake">VW</constant>
<constant name="engineCode">DG</constant>
<constant name="vehicleName">Aurora</constant>
<constant name="tcu_solenoid1">"NONE"</constant>
<constant name="tcu_solenoid2">"NONE"</constant>
<constant name="tcu_solenoid3">"NONE"</constant>
<constant name="tcu_solenoid4">"NONE"</constant>
<constant name="tcu_solenoid5">"NONE"</constant>
<constant name="tcu_solenoid6">"NONE"</constant>
<constant name="etbFunctions1">"Throttle 1"</constant>
<constant name="etbFunctions2">"Throttle 2"</constant>
<constant name="drv8860spiDevice">"Off"</constant>
<constant name="drv8860_cs">"NONE"</constant>
<constant name="drv8860_csPinMode">"default"</constant>
<constant name="drv8860_miso">"NONE"</constant>
<constant cols="1" digits="3" name="fuelLevelBins" rows="8" units="volt">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="luaOutputPins1">"NONE"</constant>
<constant name="luaOutputPins2">"NONE"</constant>
<constant name="luaOutputPins3">"NONE"</constant>
<constant name="luaOutputPins4">"NONE"</constant>
<constant name="luaOutputPins5">"NONE"</constant>
<constant name="luaOutputPins6">"NONE"</constant>
<constant name="luaOutputPins7">"NONE"</constant>
<constant name="luaOutputPins8">"NONE"</constant>
<constant digits="1" name="vvtOffsets1" units="value">0.0</constant>
<constant digits="1" name="vvtOffsets2" units="value">0.0</constant>
<constant digits="1" name="vvtOffsets3" units="value">0.0</constant>
<constant digits="1" name="vvtOffsets4" units="value">0.0</constant>
<constant name="vrThreshold1_pin">"NONE"</constant>
<constant cols="1" digits="0" name="vrThreshold1_pad" rows="3">
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="vrThreshold1_rpmBins" rows="6" units="rpm">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="2" name="vrThreshold1_values" rows="6" units="volts">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="vrThreshold2_pin">"NONE"</constant>
<constant cols="1" digits="0" name="vrThreshold2_pad" rows="3">
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="vrThreshold2_rpmBins" rows="6" units="rpm">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="2" name="vrThreshold2_values" rows="6" units="volts">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="gpPwmNote1"/>
<constant name="gpPwmNote2"/>
<constant name="gpPwmNote3"/>
<constant name="gpPwmNote4"/>
<constant digits="0" name="tps2SecondaryMin" units="ADC">895.0</constant>
<constant digits="0" name="tps2SecondaryMax" units="ADC">53.0</constant>
<constant name="disablePrimaryUart">"false"</constant>
<constant name="fuelClosedLoopCorrectionEnabled">"false"</constant>
<constant name="isVerboseIAC">"false"</constant>
<constant name="boardUseTachPullUp">"5v"</constant>
<constant name="boardUseTempPullUp">"Piggyback Mode"</constant>
<constant name="isEngineChartEnabled">"true"</constant>
<constant name="silentTriggerError">"false"</constant>
<constant name="useLinearCltSensor">"false"</constant>
<constant name="canReadEnabled">"false"</constant>
<constant name="canWriteEnabled">"false"</constant>
<constant name="useLinearIatSensor">"false"</constant>
<constant name="boardUse2stepPullDown">"With Pull Up"</constant>
<constant name="tachPulseDurationAsDutyCycle">"Constant time"</constant>
<constant name="isAlternatorControlEnabled">"false"</constant>
<constant name="invertPrimaryTriggerSignal">"false"</constant>
<constant name="invertSecondaryTriggerSignal">"false"</constant>
<constant name="cutFuelOnHardLimit">"yes"</constant>
<constant name="cutSparkOnHardLimit">"no"</constant>
<constant name="launchFuelCutEnable">"false"</constant>
<constant name="launchSparkCutEnable">"false"</constant>
<constant name="boardUseCrankPullUp">"VR"</constant>
<constant name="boardUseCamPullDown">"With Pull Up"</constant>
<constant name="boardUseCamVrPullUp">"VR"</constant>
<constant name="boardUseD2PullDown">"With Pull Up"</constant>
<constant name="boardUseD3PullDown">"With Pull Up"</constant>
<constant name="boardUseD4PullDown">"With Pull Up"</constant>
<constant name="boardUseD5PullDown">"With Pull Up"</constant>
<constant name="useFSIO5ForCriticalIssueEngineStop">"false"</constant>
<constant name="useFSIO4ForSeriousEngineWarning">"false"</constant>
<constant name="launchActivateInverted">"false"</constant>
<constant name="twoStroke">"Four Stroke"</constant>
<constant name="skippedWheelOnCam">"On crankshaft"</constant>
<constant name="hipOutputChannel">"NONE"</constant>
<constant name="acSwitch">"NONE"</constant>
<constant name="vRefAdcChannel">"NONE"</constant>
<constant digits="0" name="etbNeutralPosition" units="%">0.0</constant>
<constant name="idleMode">"Open Loop"</constant>
<constant name="isInjectionEnabled">"true"</constant>
<constant name="isIgnitionEnabled">"true"</constant>
<constant name="isCylinderCleanupEnabled">"true"</constant>
<constant name="complexWallModel">"Basic (constants)"</constant>
<constant name="alwaysInstantRpm">"false"</constant>
<constant name="isMapAveragingEnabled">"false"</constant>
<constant name="overrideCrankingIacSetting">"true"</constant>
<constant name="useSeparateAdvanceForIdle">"true"</constant>
<constant name="unused1476b8">"false"</constant>
<constant name="isWaveAnalyzerEnabled">"false"</constant>
<constant name="useSeparateVeForIdle">"false"</constant>
<constant name="verboseTriggerSynchDetails">"false"</constant>
<constant name="isManualSpinningMode">"false"</constant>
<constant name="twoWireBatchInjection">"true"</constant>
<constant name="useOnlyRisingEdgeForTrigger">"true"</constant>
<constant name="twoWireBatchIgnition">"true"</constant>
<constant name="useFixedBaroCorrFromMap">"false"</constant>
<constant name="useSeparateAdvanceForCranking">"Fixed (auto taper)"</constant>
<constant name="useAdvanceCorrectionsForCranking">"false"</constant>
<constant name="flexCranking">"false"</constant>
<constant name="unused1476b20">"false"</constant>
<constant name="useIacPidMultTable">"false"</constant>
<constant name="isBoostControlEnabled">"false"</constant>
<constant name="launchSmoothRetard">"false"</constant>
<constant name="unused_1484_bit_24">"false"</constant>
<constant name="unused_1484_bit_25">"false"</constant>
<constant name="unused_1484_bit_26">"false"</constant>
<constant name="unused_1484_bit_27">"false"</constant>
<constant name="unused_1484_bit_28">"false"</constant>
<constant name="unused_1484_bit_29">"false"</constant>
<constant name="unused_1484_bit_30">"false"</constant>
<constant name="unused_1484_bit_31">"false"</constant>
<constant digits="0" name="engineChartSize" units="count">300.0</constant>
<constant digits="3" name="turboSpeedSensorMultiplier" units="mult">0.0</constant>
<constant name="camInputsDebug1">"NONE"</constant>
<constant name="camInputsDebug2">"NONE"</constant>
<constant name="camInputsDebug3">"NONE"</constant>
<constant name="camInputsDebug4">"NONE"</constant>
<constant digits="0" name="acIdleRpmBump" units="RPM">200.0</constant>
<constant digits="0" name="warningPeriod" units="seconds">10.0</constant>
<constant digits="2" name="knockDetectionWindowStart" units="angle">45.0</constant>
<constant digits="2" name="knockDetectionWindowEnd" units="angle">135.0</constant>
<constant digits="0" name="idleStepperReactionTime" units="ms">10.0</constant>
<constant digits="0" name="idleStepperTotalSteps" units="count">150.0</constant>
<constant digits="0" name="noAccelAfterHardLimitPeriodSecs" units="sec">3.0</constant>
<constant digits="0" name="mapAveragingSchedulingAtIndex" units="index">0.0</constant>
<constant cols="1" digits="2" name="baroCorrPressureBins" rows="4" units="kPa">
         75.0
         85.0
         95.0
         105.0
      </constant>
<constant cols="1" digits="2" name="baroCorrRpmBins" rows="4" units="RPM">
         650.0
         800.0
         3750.0
         7000.0
      </constant>
<constant cols="4" digits="2" name="baroCorrTable" rows="4" units="ratio">
         1.0 1.0 1.0 1.0
         1.0 1.0 1.0 1.0
         1.0 1.0 1.0 1.0
         1.0 1.0 1.0 1.0
      </constant>
<constant cols="1" digits="2" name="crankingTpsCoef" rows="8" units="Ratio">
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
      </constant>
<constant cols="1" digits="2" name="crankingTpsBins" rows="8" units="%">
         0.0
         14.0
         29.0
         43.0
         57.0
         71.0
         86.0
         100.0
      </constant>
<constant digits="2" name="tachPulseDuractionMs">4.0</constant>
<constant digits="2" name="wwaeTau" units="Seconds">0.0</constant>
<constant digits="4" name="alternatorControl_pFactor">30.0</constant>
<constant digits="4" name="alternatorControl_iFactor">0.0</constant>
<constant digits="4" name="alternatorControl_dFactor">0.0</constant>
<constant digits="0" name="alternatorControl_offset">0.0</constant>
<constant digits="0" name="alternatorControl_periodMs" units="ms">100.0</constant>
<constant digits="0" name="alternatorControl_minValue">10.0</constant>
<constant digits="0" name="alternatorControl_maxValue">90.0</constant>
<constant digits="4" name="etb_pFactor">7.366691</constant>
<constant digits="4" name="etb_iFactor">105.67963</constant>
<constant digits="4" name="etb_dFactor">0.0835911</constant>
<constant digits="0" name="etb_offset">0.0</constant>
<constant digits="0" name="etb_periodMs" units="ms">0.0</constant>
<constant digits="0" name="etb_minValue">-100.0</constant>
<constant digits="0" name="etb_maxValue">100.0</constant>
<constant name="triggerInputDebugPins1">"NONE"</constant>
<constant name="triggerInputDebugPins2">"NONE"</constant>
<constant name="triggerInputDebugPins3">"NONE"</constant>
<constant name="turboSpeedSensorInputPin">"NONE"</constant>
<constant digits="0" name="tps2Min" units="ADC">112.0</constant>
<constant digits="0" name="tps2Max" units="ADC">955.0</constant>
<constant name="starterControlPin">"NONE"</constant>
<constant name="startStopButtonMode">"DEFAULT"</constant>
<constant name="mc33816_flag0">"NONE"</constant>
<constant digits="0" name="tachPulsePerRev" units="Pulse">1.0</constant>
<constant digits="2" name="mapErrorDetectionTooLow" units="kPa">10.0</constant>
<constant digits="2" name="mapErrorDetectionTooHigh" units="kPa">410.0</constant>
<constant digits="2" name="multisparkSparkDuration" units="ms">1.0</constant>
<constant digits="2" name="multisparkDwell" units="ms">2.0</constant>
<constant digits="4" name="idleRpmPid_pFactor">0.049999952</constant>
<constant digits="4" name="idleRpmPid_iFactor">0.19999981</constant>
<constant digits="4" name="idleRpmPid_dFactor">0.0</constant>
<constant digits="0" name="idleRpmPid_offset">0.0</constant>
<constant digits="0" name="idleRpmPid_periodMs" units="ms">10.0</constant>
<constant digits="0" name="idleRpmPid_minValue">0.0</constant>
<constant digits="0" name="idleRpmPid_maxValue">99.0</constant>
<constant digits="2" name="wwaeBeta" units="Fraction">0.0</constant>
<constant name="communicationLedPin">"PE4"</constant>
<constant name="runningLedPin">"PE5"</constant>
<constant name="binarySerialTxPin">"NONE"</constant>
<constant name="binarySerialRxPin">"NONE"</constant>
<constant name="auxValves1">"NONE"</constant>
<constant name="auxValves2">"NONE"</constant>
<constant name="tcuUpshiftButtonPin">"NONE"</constant>
<constant name="tcuDownshiftButtonPin">"NONE"</constant>
<constant digits="2" name="throttlePedalUpVoltage" units="voltage">0.7265406</constant>
<constant digits="2" name="throttlePedalWOTVoltage" units="voltage">4.468989</constant>
<constant digits="0" name="startUpFuelPumpDuration" units="seconds">2.0</constant>
<constant digits="0" name="idlePidRpmDeadZone" units="RPM">50.0</constant>
<constant cols="1" digits="2" name="cltIdleRpmBins" rows="16" units="C">
         -40.0
         -30.0
         -20.0
         -1.1399994
         12.689941
         22.41
         31.75
         46.32
         59.240234
         70.0
         79.95996
         90.0
         99.950195
         120.0
         150.0
         170.0
      </constant>
<constant cols="1" digits="0" name="cltIdleRpm" rows="16" units="RPM">
         1600.0
         1550.0
         1500.0
         1400.0
         1350.0
         1300.0
         1300.0
         1300.0
         1300.0
         1250.0
         1200.0
         1100.0
         1000.0
         1000.0
         1000.0
         1600.0
      </constant>
<constant digits="1" name="targetVBatt" units="Volts">14.0</constant>
<constant digits="2" name="alternatorOffAboveTps" units="%">120.0</constant>
<constant digits="0" name="afterCrankingIACtaperDuration" units="cycles">48.0</constant>
<constant digits="0" name="iacByTpsTaper" units="percent">0.0</constant>
<constant name="auxSerialTxPin">"NONE"</constant>
<constant name="warningLedPin">"PE6"</constant>
<constant name="auxSerialRxPin">"NONE"</constant>
<constant name="LIS302DLCsPin">"NONE"</constant>
<constant digits="2" name="tpsAccelLookback" units="sec">0.0</constant>
<constant digits="0" name="coastingFuelCutVssLow" units="kph">0.0</constant>
<constant digits="0" name="coastingFuelCutVssHigh" units="kph">0.0</constant>
<constant digits="1" name="noFuelTrimAfterDfcoTime" units="sec">0.0</constant>
<constant digits="1" name="tpsAccelEnrichmentThreshold" units="roc">40.0</constant>
<constant name="auxSpeedSensorInputPin1">"NONE"</constant>
<constant name="auxSpeedSensorInputPin2">"NONE"</constant>
<constant digits="0" name="totalGearsCount">0.0</constant>
<constant name="injectionTimingMode">"End of injection"</constant>
<constant digits="0" name="uartConsoleSerialSpeed" units="BPs">115200.0</constant>
<constant digits="1" name="tpsDecelEnleanmentThreshold" units="roc">0.0</constant>
<constant digits="2" name="tpsDecelEnleanmentMultiplier" units="coeff">0.0</constant>
<constant digits="3" name="slowAdcAlpha" units="coeff">0.33300018</constant>
<constant name="debugMode">"ETB Autotune"</constant>
<constant digits="0" name="auxSerialSpeed" units="BPs">0.0</constant>
<constant digits="2" name="throttlePedalSecondaryUpVoltage" units="voltage">0.3697795</constant>
<constant digits="2" name="throttlePedalSecondaryWOTVoltage" units="voltage">2.242791</constant>
<constant name="canBaudRate">"500kbps"</constant>
<constant name="veOverrideMode">"None"</constant>
<constant name="can2BaudRate">"100kbps"</constant>
<constant name="afrOverrideMode">"None"</constant>
<constant digits="1" name="mc33_hpfp_i_peak" units="A">5.0</constant>
<constant digits="1" name="mc33_hpfp_i_hold" units="A">3.0</constant>
<constant digits="0" name="mc33_hpfp_i_hold_off" units="us">10.0</constant>
<constant digits="0" name="mc33_hpfp_max_hold" units="ms">10.0</constant>
<constant name="unused1740b0">"false"</constant>
<constant name="unused1740b1">"false"</constant>
<constant name="unused1740b2">"false"</constant>
<constant name="stepperDcInvertedPins">"false"</constant>
<constant name="unused1127">"false"</constant>
<constant name="unused1128">"false"</constant>
<constant name="unused1129">"false"</constant>
<constant name="unused1130">"false"</constant>
<constant name="unusedBit_508_8">"false"</constant>
<constant name="unusedBit_508_9">"false"</constant>
<constant name="unusedBit_508_10">"false"</constant>
<constant name="unusedBit_508_11">"false"</constant>
<constant name="unusedBit_508_12">"false"</constant>
<constant name="unusedBit_508_13">"false"</constant>
<constant name="unusedBit_508_14">"false"</constant>
<constant name="unusedBit_508_15">"false"</constant>
<constant name="unusedBit_508_16">"false"</constant>
<constant name="unusedBit_508_17">"false"</constant>
<constant name="unusedBit_508_18">"false"</constant>
<constant name="unusedBit_508_19">"false"</constant>
<constant name="unusedBit_508_20">"false"</constant>
<constant name="unusedBit_508_21">"false"</constant>
<constant name="unusedBit_508_22">"false"</constant>
<constant name="unusedBit_508_23">"false"</constant>
<constant name="unusedBit_508_24">"false"</constant>
<constant name="unusedBit_508_25">"false"</constant>
<constant name="unusedBit_508_26">"false"</constant>
<constant name="unusedBit_508_27">"false"</constant>
<constant name="unusedBit_508_28">"false"</constant>
<constant name="unusedBit_508_29">"false"</constant>
<constant name="unusedBit_508_30">"false"</constant>
<constant name="unusedBit_508_31">"false"</constant>
<constant digits="1" name="benchTestOffTime" units="ms">500.0</constant>
<constant digits="1" name="benchTestCount" units="count">3.0</constant>
<constant digits="1" name="benchTestOnTime" units="ms">0.0</constant>
<constant name="launchActivatePinMode">"DEFAULT"</constant>
<constant name="can2TxPin">"PB13"</constant>
<constant name="can2RxPin">"PB12"</constant>
<constant name="starterControlPinMode">"default"</constant>
<constant name="wastegatePositionSensor">"NONE"</constant>
<constant name="ignOverrideMode">"None"</constant>
<constant name="injectorPressureType">"Low"</constant>
<constant name="hpfpValvePin">"NONE"</constant>
<constant name="hpfpValvePinMode">"default"</constant>
<constant digits="0" name="boostCutPressure" units="kPa (absolute)">0.0</constant>
<constant cols="1" digits="0" name="tchargeBins" rows="16" units="kg/h">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="2" name="tchargeValues" rows="16" units="ratio">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="unusedMapAccelTaperBins" rows="8" units="counter">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="fixedTiming" units="deg">15.0</constant>
<constant digits="2" name="mapLowValueVoltage" units="v">0.2</constant>
<constant digits="2" name="mapHighValueVoltage" units="v">4.799988</constant>
<constant digits="2" name="egoValueShift" units="value">0.0</constant>
<constant name="vvtPins1">"NONE"</constant>
<constant name="vvtPins2">"NONE"</constant>
<constant name="vvtPins3">"NONE"</constant>
<constant name="vvtPins4">"NONE"</constant>
<constant name="cj125SpiDevice">"Off"</constant>
<constant name="cj125CsPinMode">"default"</constant>
<constant name="sdCardCsPinMode">"default"</constant>
<constant digits="0" name="alignmentFill_at_1847" units="units">0.0</constant>
<constant digits="0" name="crankingIACposition" units="percent">50.0</constant>
<constant digits="4" name="tChargeMinRpmMinTps">0.25</constant>
<constant digits="4" name="tChargeMinRpmMaxTps">0.25</constant>
<constant digits="4" name="tChargeMaxRpmMinTps">0.25</constant>
<constant digits="4" name="tChargeMaxRpmMaxTps">0.9000015</constant>
<constant digits="0" name="vvtOutputFrequency1" units="Hz">300.0</constant>
<constant digits="0" name="vvtOutputFrequency2" units="Hz">0.0</constant>
<constant digits="0" name="fan1ExtraIdle" units="%">0.0</constant>
<constant cols="1" digits="0" name="alignmentFill_at_1873" rows="3" units="units">
         0.0
         0.0
         0.0
      </constant>
<constant digits="0" name="alternatorPwmFrequency" units="Hz">300.0</constant>
<constant cols="1" digits="3" name="narrowToWideOxygenBins" rows="8" units="V">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="2" name="narrowToWideOxygen" rows="8" units="ratio">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="vvtMode1">"Single Tooth First Half"</constant>
<constant name="vvtMode2">"Inactive"</constant>
<constant digits="0" name="fan2ExtraIdle" units="%">0.0</constant>
<constant digits="2" name="primingDelay" units="sec">0.0</constant>
<constant name="auxAnalogInputs1">"NONE"</constant>
<constant name="auxAnalogInputs2">"NONE"</constant>
<constant name="auxAnalogInputs3">"NONE"</constant>
<constant name="auxAnalogInputs4">"NONE"</constant>
<constant name="auxAnalogInputs5">"NONE"</constant>
<constant name="auxAnalogInputs6">"NONE"</constant>
<constant name="auxAnalogInputs7">"NONE"</constant>
<constant name="auxAnalogInputs8">"NONE"</constant>
<constant name="trailingCoilPins1">"NONE"</constant>
<constant name="trailingCoilPins2">"NONE"</constant>
<constant name="trailingCoilPins3">"NONE"</constant>
<constant name="trailingCoilPins4">"NONE"</constant>
<constant name="trailingCoilPins5">"NONE"</constant>
<constant name="trailingCoilPins6">"NONE"</constant>
<constant name="trailingCoilPins7">"NONE"</constant>
<constant name="trailingCoilPins8">"NONE"</constant>
<constant name="trailingCoilPins9">"NONE"</constant>
<constant name="trailingCoilPins10">"NONE"</constant>
<constant name="trailingCoilPins11">"NONE"</constant>
<constant name="trailingCoilPins12">"NONE"</constant>
<constant cols="1" digits="1" name="cltTimingBins" rows="8" units="C">
         -40.0
         -17.0
         6.0
         29.0
         51.0
         150.0
         160.0
         170.0
      </constant>
<constant cols="1" digits="0" name="cltTimingExtra" rows="8" units="degree">
         10.0
         8.0
         6.0
         4.0
         2.0
         0.0
         0.0
         0.0
      </constant>
<constant name="tle8888mode">"Auto"</constant>
<constant name="LIS302DLCsPinMode">"default"</constant>
<constant name="injectorCompensationMode">"None"</constant>
<constant name="fan2PinMode">"default"</constant>
<constant digits="0" name="fuelReferencePressure" units="kPa">300.0</constant>
<constant digits="2" name="postCrankingFactor" units="mult">1.4000015</constant>
<constant digits="0" name="postCrankingDurationSec" units="seconds">2.0</constant>
<constant digits="1" name="auxTempSensor1_tempC_1" units="*C">0.0</constant>
<constant digits="1" name="auxTempSensor1_tempC_2" units="*C">80.0</constant>
<constant digits="1" name="auxTempSensor1_tempC_3" units="*C">100.0</constant>
<constant digits="1" name="auxTempSensor1_resistance_1" units="Ohm">5800.0</constant>
<constant digits="1" name="auxTempSensor1_resistance_2" units="Ohm">320.0</constant>
<constant digits="1" name="auxTempSensor1_resistance_3" units="Ohm">180.0</constant>
<constant digits="1" name="auxTempSensor1_bias_resistor" units="Ohm">2700.0</constant>
<constant name="auxTempSensor1_adcChannel">"Analog Temp 3"</constant>
<constant cols="1" digits="0" name="auxTempSensor1_alignmentFill_at_29" rows="3" units="units">
         0.0
         0.0
         0.0
      </constant>
<constant digits="1" name="auxTempSensor2_tempC_1" units="*C">0.0</constant>
<constant digits="1" name="auxTempSensor2_tempC_2" units="*C">0.0</constant>
<constant digits="1" name="auxTempSensor2_tempC_3" units="*C">0.0</constant>
<constant digits="1" name="auxTempSensor2_resistance_1" units="Ohm">0.0</constant>
<constant digits="1" name="auxTempSensor2_resistance_2" units="Ohm">0.0</constant>
<constant digits="1" name="auxTempSensor2_resistance_3" units="Ohm">0.0</constant>
<constant digits="1" name="auxTempSensor2_bias_resistor" units="Ohm">0.0</constant>
<constant name="auxTempSensor2_adcChannel">"NONE"</constant>
<constant cols="1" digits="0" name="auxTempSensor2_alignmentFill_at_29" rows="3" units="units">
         0.0
         0.0
         0.0
      </constant>
<constant digits="0" name="knockSamplingDuration" units="Deg">90.0</constant>
<constant digits="0" name="etbFreq" units="Hz">3000.0</constant>
<constant digits="4" name="etbWastegatePid_pFactor">1.0</constant>
<constant digits="4" name="etbWastegatePid_iFactor">0.0</constant>
<constant digits="4" name="etbWastegatePid_dFactor">0.0</constant>
<constant digits="0" name="etbWastegatePid_offset">0.0</constant>
<constant digits="0" name="etbWastegatePid_periodMs" units="ms">0.0</constant>
<constant digits="0" name="etbWastegatePid_minValue">-60.0</constant>
<constant digits="0" name="etbWastegatePid_maxValue">60.0</constant>
<constant name="stepperNumMicroSteps">"Full-Step (Default)"</constant>
<constant digits="0" name="stepperMinDutyCycle" units="%">0.0</constant>
<constant digits="0" name="stepperMaxDutyCycle" units="%">0.0</constant>
<constant name="sdCardSpiDevice">"SPI3"</constant>
<constant digits="1" name="timing_offset_cylinder1" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder2" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder3" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder4" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder5" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder6" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder7" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder8" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder9" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder10" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder11" units="deg">0.0</constant>
<constant digits="1" name="timing_offset_cylinder12" units="deg">0.0</constant>
<constant digits="1" name="idlePidActivationTime" units="seconds">0.0</constant>
<constant name="spi1SckMode">"default"</constant>
<constant name="spi1MosiMode">"default"</constant>
<constant name="spi1MisoMode">"default"</constant>
<constant name="spi2SckMode">"default"</constant>
<constant name="spi2MosiMode">"default"</constant>
<constant name="spi2MisoMode">"default"</constant>
<constant name="spi3SckMode">"default"</constant>
<constant name="spi3MosiMode">"default"</constant>
<constant name="spi3MisoMode">"default"</constant>
<constant name="stepperEnablePinMode">"default"</constant>
<constant name="mc33816_rstb">"NONE"</constant>
<constant name="mc33816_driven">"NONE"</constant>
<constant name="brakePedalPin">"NONE"</constant>
<constant name="cj125ua">"NONE"</constant>
<constant name="cj125ur">"NONE"</constant>
<constant name="brakePedalPinMode">"PULLUP"</constant>
<constant digits="4" name="auxPid1_pFactor">0.0</constant>
<constant digits="4" name="auxPid1_iFactor">0.0</constant>
<constant digits="4" name="auxPid1_dFactor">0.0</constant>
<constant digits="0" name="auxPid1_offset">0.0</constant>
<constant digits="0" name="auxPid1_periodMs" units="ms">0.0</constant>
<constant digits="0" name="auxPid1_minValue">10.0</constant>
<constant digits="0" name="auxPid1_maxValue">90.0</constant>
<constant digits="4" name="auxPid2_pFactor">0.0</constant>
<constant digits="4" name="auxPid2_iFactor">0.0</constant>
<constant digits="4" name="auxPid2_dFactor">0.0</constant>
<constant digits="0" name="auxPid2_offset">0.0</constant>
<constant digits="0" name="auxPid2_periodMs" units="ms">0.0</constant>
<constant digits="0" name="auxPid2_minValue">0.0</constant>
<constant digits="0" name="auxPid2_maxValue">0.0</constant>
<constant digits="4" name="injectorCorrectionPolynomial1">0.0</constant>
<constant digits="4" name="injectorCorrectionPolynomial2">-1.69873E-10</constant>
<constant digits="4" name="injectorCorrectionPolynomial3">0.0</constant>
<constant digits="4" name="injectorCorrectionPolynomial4">0.0</constant>
<constant digits="4" name="injectorCorrectionPolynomial5">0.0</constant>
<constant digits="4" name="injectorCorrectionPolynomial6">0.0</constant>
<constant digits="4" name="injectorCorrectionPolynomial7">0.0</constant>
<constant digits="4" name="injectorCorrectionPolynomial8">0.0</constant>
<constant cols="1" digits="0" name="primeBins" rows="8" units="C">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="oilPressure_hwChannel">"NONE"</constant>
<constant cols="1" digits="0" name="oilPressure_alignmentFill" rows="3" units="unit">
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="oilPressure_v1" units="volts">0.5</constant>
<constant digits="2" name="oilPressure_value1" units="kPa">0.0</constant>
<constant digits="2" name="oilPressure_v2" units="volts">4.5</constant>
<constant digits="2" name="oilPressure_value2" units="kPa">1034.0</constant>
<constant name="accelerometerSpiDevice">"Off"</constant>
<constant name="fan2Pin">"NONE"</constant>
<constant digits="0" name="fan2OnTemperature" units="deg C">95.0</constant>
<constant digits="0" name="fan2OffTemperature" units="deg C">91.0</constant>
<constant cols="1" digits="3" name="scriptCurve1Bins" rows="16" units="x">
         0.0
         7.0
         13.0
         20.0
         27.0
         33.0
         40.0
         47.0
         53.0
         60.0
         67.0
         73.0
         80.0
         87.0
         93.0
         100.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve1" rows="16" units="y">
         0.0
         7.0
         13.0
         20.0
         27.0
         33.0
         40.0
         47.0
         53.0
         60.0
         67.0
         73.0
         80.0
         87.0
         93.0
         100.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve2Bins" rows="16" units="x">
         0.0
         7.0
         13.0
         20.0
         27.0
         33.0
         40.0
         47.0
         53.0
         60.0
         67.0
         73.0
         80.0
         87.0
         93.0
         100.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve2" rows="16" units="y">
         30.0
         39.0
         49.0
         58.0
         67.0
         77.0
         86.0
         95.0
         105.0
         114.0
         123.0
         133.0
         142.0
         151.0
         161.0
         170.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve3Bins" rows="8" units="x">
         0.0
         14.0
         29.0
         43.0
         57.0
         71.0
         86.0
         100.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve3" rows="8" units="y">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve4Bins" rows="8" units="x">
         0.0
         14.0
         29.0
         43.0
         57.0
         71.0
         86.0
         100.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve4" rows="8" units="y">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="stepperEnablePin">"NONE"</constant>
<constant name="tle8888_cs">"NONE"</constant>
<constant name="tle8888_csPinMode">"default"</constant>
<constant name="mc33816_cs">"NONE"</constant>
<constant cols="1" digits="2" name="crankingAdvanceBins" rows="4" units="RPM">
         0.0
         200.0
         400.0
         1000.0
      </constant>
<constant cols="1" digits="2" name="crankingAdvance" rows="4" units="deg">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="servoOutputPins1">"NONE"</constant>
<constant name="servoOutputPins2">"NONE"</constant>
<constant name="servoOutputPins3">"NONE"</constant>
<constant name="servoOutputPins4">"NONE"</constant>
<constant name="servoOutputPins5">"NONE"</constant>
<constant name="servoOutputPins6">"NONE"</constant>
<constant name="servoOutputPins7">"NONE"</constant>
<constant name="servoOutputPins8">"NONE"</constant>
<constant digits="0" name="coastingFuelCutRpmHigh" units="rpm">1800.0</constant>
<constant digits="0" name="coastingFuelCutRpmLow" units="rpm">1600.0</constant>
<constant digits="0" name="coastingFuelCutTps" units="%">1.0</constant>
<constant digits="0" name="coastingFuelCutClt" units="C">60.0</constant>
<constant digits="0" name="pidExtraForLowRpm" units="%">0.0</constant>
<constant digits="0" name="coastingFuelCutMap" units="kPa">72.0</constant>
<constant cols="1" digits="2" name="iacCoastingBins" rows="16" units="C">
         -40.0
         -29.333374
         -18.666626
         -8.0
         2.6666565
         13.333374
         24.0
         34.666504
         45.333496
         56.0
         66.66699
         77.33301
         88.0
         98.66699
         109.33301
         120.0
      </constant>
<constant cols="1" digits="2" name="iacCoasting" rows="16" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="highPressureFuel_hwChannel">"NONE"</constant>
<constant cols="1" digits="0" name="highPressureFuel_alignmentFill" rows="3" units="unit">
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="highPressureFuel_v1" units="volts">0.0</constant>
<constant digits="2" name="highPressureFuel_value1" units="kPa">0.0</constant>
<constant digits="2" name="highPressureFuel_v2" units="volts">5.0</constant>
<constant digits="2" name="highPressureFuel_value2" units="kPa">50000.0</constant>
<constant name="lowPressureFuel_hwChannel">"NONE"</constant>
<constant cols="1" digits="0" name="lowPressureFuel_alignmentFill" rows="3" units="unit">
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="lowPressureFuel_v1" units="volts">0.5</constant>
<constant digits="2" name="lowPressureFuel_value1" units="kPa">0.0</constant>
<constant digits="2" name="lowPressureFuel_v2" units="volts">4.5</constant>
<constant digits="2" name="lowPressureFuel_value2" units="kPa">689.5</constant>
<constant cols="1" digits="0" name="cltRevLimitRpmBins" rows="4" units="C">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="cltRevLimitRpm" rows="4">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="scriptCurveName1"/>
<constant name="scriptCurveName2"/>
<constant name="scriptCurveName3"/>
<constant name="scriptCurveName4"/>
<constant name="scriptCurveName5"/>
<constant name="scriptCurveName6"/>
<constant cols="1" digits="3" name="scriptCurve5Bins" rows="8" units="x">
         0.0
         14.0
         29.0
         43.0
         57.0
         71.0
         86.0
         100.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve5" rows="8" units="y">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve6Bins" rows="8" units="x">
         0.0
         14.0
         29.0
         43.0
         57.0
         71.0
         86.0
         100.0
      </constant>
<constant cols="1" digits="3" name="scriptCurve6" rows="8" units="y">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="scriptTableName1"/>
<constant name="scriptTableName2"/>
<constant name="scriptTableName3"/>
<constant name="scriptTableName4"/>
<constant name="scriptSettingName1"/>
<constant name="scriptSettingName2"/>
<constant name="scriptSettingName3"/>
<constant name="scriptSettingName4"/>
<constant name="scriptSettingName5"/>
<constant name="scriptSettingName6"/>
<constant name="scriptSettingName7"/>
<constant name="scriptSettingName8"/>
<constant digits="3" name="tChargeAirCoefMin">0.09800005</constant>
<constant digits="3" name="tChargeAirCoefMax">0.9020004</constant>
<constant digits="1" name="tChargeAirFlowMax" units="kg/h">153.59961</constant>
<constant digits="1" name="tChargeAirIncrLimit" units="deg/sec">1.0</constant>
<constant digits="1" name="tChargeAirDecrLimit" units="deg/sec">12.5</constant>
<constant name="tChargeMode">"RPM+TPS (Default)"</constant>
<constant cols="1" digits="0" name="etbBiasBins" rows="8" units="target TPS position">
         0.0
         1.0
         4.55
         6.0
         7.0
         98.0
         99.0
         100.0
      </constant>
<constant cols="1" digits="2" name="etbBiasValues" rows="8" units="ETB duty cycle bias">
         -20.0
         -20.0
         0.0
         0.0
         20.0
         30.0
         30.0
         30.0
      </constant>
<constant digits="2" name="hip9011Gain">1.0</constant>
<constant digits="0" name="etb_iTermMin">-30.0</constant>
<constant digits="0" name="etb_iTermMax">30.0</constant>
<constant digits="4" name="idleTimingPid_pFactor">1.0</constant>
<constant digits="4" name="idleTimingPid_iFactor">0.0</constant>
<constant digits="4" name="idleTimingPid_dFactor">0.05</constant>
<constant digits="0" name="idleTimingPid_offset">0.0</constant>
<constant digits="0" name="idleTimingPid_periodMs" units="ms">0.0</constant>
<constant digits="0" name="idleTimingPid_minValue">6.0</constant>
<constant digits="0" name="idleTimingPid_maxValue">6.0</constant>
<constant digits="0" name="idleTimingPidDeadZone" units="RPM">50.0</constant>
<constant digits="0" name="tpsAccelFractionPeriod" units="cycles">0.0</constant>
<constant digits="2" name="tpsAccelFractionDivisor" units="coef">0.0</constant>
<constant name="tle8888spiDevice">"Off"</constant>
<constant name="mc33816spiDevice">"Off"</constant>
<constant digits="0" name="idlerpmpid_iTermMin">-200.0</constant>
<constant name="tle6240spiDevice">"Off"</constant>
<constant digits="1" name="stoichRatioPrimary" units=":1">14.7</constant>
<constant digits="0" name="idlerpmpid_iTermMax">200.0</constant>
<constant digits="0" name="etbIdleThrottleRange" units="%">3.0</constant>
<constant digits="0" name="cylinderBankSelect1">1.0</constant>
<constant digits="0" name="cylinderBankSelect2">1.0</constant>
<constant digits="0" name="cylinderBankSelect3">1.0</constant>
<constant digits="0" name="cylinderBankSelect4">1.0</constant>
<constant digits="0" name="cylinderBankSelect5">1.0</constant>
<constant digits="0" name="cylinderBankSelect6">1.0</constant>
<constant digits="0" name="cylinderBankSelect7">1.0</constant>
<constant digits="0" name="cylinderBankSelect8">1.0</constant>
<constant digits="0" name="cylinderBankSelect9">1.0</constant>
<constant digits="0" name="cylinderBankSelect10">1.0</constant>
<constant digits="0" name="cylinderBankSelect11">1.0</constant>
<constant digits="0" name="cylinderBankSelect12">1.0</constant>
<constant cols="1" digits="0" name="primeValues" rows="8" units="mg">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="triggerCompCenterVolt" units="V">0.0</constant>
<constant digits="2" name="triggerCompHystMin" units="V">0.0</constant>
<constant digits="2" name="triggerCompHystMax" units="V">0.0</constant>
<constant digits="0" name="triggerCompSensorSatRpm" units="RPM">0.0</constant>
<constant digits="4" name="idleRpmPid2_pFactor">0.0</constant>
<constant digits="4" name="idleRpmPid2_iFactor">0.0</constant>
<constant digits="4" name="idleRpmPid2_dFactor">0.0</constant>
<constant digits="0" name="idleRpmPid2_offset">0.0</constant>
<constant digits="0" name="idleRpmPid2_periodMs" units="ms">0.0</constant>
<constant digits="0" name="idleRpmPid2_minValue">0.0</constant>
<constant digits="0" name="idleRpmPid2_maxValue">0.0</constant>
<constant cols="8" digits="2" name="iacPidMultTable" rows="8" units="%">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="2" name="iacPidMultLoadBins" rows="8" units="Load">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="iacPidMultRpmBins" rows="8" units="RPM">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="canVssNbcType">"BMW_e46"</constant>
<constant name="gppwm1_pin">"Highside 1"</constant>
<constant digits="0" name="gppwm1_dutyIfError" units="%">20.0</constant>
<constant digits="0" name="gppwm1_pwmFrequency" units="hz">500.0</constant>
<constant digits="0" name="gppwm1_onAboveDuty" units="%">60.0</constant>
<constant digits="0" name="gppwm1_offBelowDuty" units="%">50.0</constant>
<constant name="gppwm1_loadAxis">"Fuel Load"</constant>
<constant digits="0" name="gppwm1_alignmentFill_map" units="unit">0.0</constant>
<constant cols="1" digits="0" name="gppwm1_loadBins" rows="8" units="load">
         0.0
         14.0
         28.0
         42.0
         57.0
         71.0
         85.0
         100.0
      </constant>
<constant cols="1" digits="0" name="gppwm1_rpmBins" rows="8" units="RPM">
         0.0
         1000.0
         2000.0
         3000.0
         4000.0
         5000.0
         6000.0
         7000.0
      </constant>
<constant cols="8" digits="0" name="gppwm1_table" rows="8" units="duty">
         60.0 60.0 60.0 60.0 60.0 60.0 60.0 60.0
         60.0 60.0 60.0 60.0 60.0 60.0 60.0 60.0
         60.0 60.0 60.0 60.0 60.0 60.0 60.0 60.0
         60.0 60.0 60.0 60.0 60.0 60.0 60.0 60.0
         60.0 60.0 60.0 60.0 60.0 60.0 60.0 60.0
         60.0 60.0 60.0 60.0 60.0 60.0 60.0 60.0
         60.0 60.0 60.0 60.0 60.0 60.0 60.0 60.0
         60.0 60.0 60.0 60.0 60.0 60.0 60.0 60.0
      </constant>
<constant name="gppwm2_pin">"NONE"</constant>
<constant digits="0" name="gppwm2_dutyIfError" units="%">0.0</constant>
<constant digits="0" name="gppwm2_pwmFrequency" units="hz">250.0</constant>
<constant digits="0" name="gppwm2_onAboveDuty" units="%">60.0</constant>
<constant digits="0" name="gppwm2_offBelowDuty" units="%">50.0</constant>
<constant name="gppwm2_loadAxis">"TPS"</constant>
<constant digits="0" name="gppwm2_alignmentFill_map" units="unit">0.0</constant>
<constant cols="1" digits="0" name="gppwm2_loadBins" rows="8" units="load">
         0.0
         14.0
         28.0
         42.0
         57.0
         71.0
         85.0
         100.0
      </constant>
<constant cols="1" digits="0" name="gppwm2_rpmBins" rows="8" units="RPM">
         0.0
         1000.0
         2000.0
         3000.0
         4000.0
         5000.0
         6000.0
         7000.0
      </constant>
<constant cols="8" digits="0" name="gppwm2_table" rows="8" units="duty">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         14.0 14.0 14.0 14.0 14.0 14.0 14.0 14.0
         28.0 28.0 28.0 28.0 28.0 28.0 28.0 28.0
         42.0 42.0 42.0 42.0 42.0 42.0 42.0 42.0
         57.0 57.0 57.0 57.0 57.0 57.0 57.0 57.0
         71.0 71.0 71.0 71.0 71.0 71.0 71.0 71.0
         85.0 85.0 85.0 85.0 85.0 85.0 85.0 85.0
         100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
      </constant>
<constant name="gppwm3_pin">"NONE"</constant>
<constant digits="0" name="gppwm3_dutyIfError" units="%">0.0</constant>
<constant digits="0" name="gppwm3_pwmFrequency" units="hz">250.0</constant>
<constant digits="0" name="gppwm3_onAboveDuty" units="%">60.0</constant>
<constant digits="0" name="gppwm3_offBelowDuty" units="%">50.0</constant>
<constant name="gppwm3_loadAxis">"TPS"</constant>
<constant digits="0" name="gppwm3_alignmentFill_map" units="unit">0.0</constant>
<constant cols="1" digits="0" name="gppwm3_loadBins" rows="8" units="load">
         0.0
         14.0
         28.0
         42.0
         57.0
         71.0
         85.0
         100.0
      </constant>
<constant cols="1" digits="0" name="gppwm3_rpmBins" rows="8" units="RPM">
         0.0
         1000.0
         2000.0
         3000.0
         4000.0
         5000.0
         6000.0
         7000.0
      </constant>
<constant cols="8" digits="0" name="gppwm3_table" rows="8" units="duty">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         14.0 14.0 14.0 14.0 14.0 14.0 14.0 14.0
         28.0 28.0 28.0 28.0 28.0 28.0 28.0 28.0
         42.0 42.0 42.0 42.0 42.0 42.0 42.0 42.0
         57.0 57.0 57.0 57.0 57.0 57.0 57.0 57.0
         71.0 71.0 71.0 71.0 71.0 71.0 71.0 71.0
         85.0 85.0 85.0 85.0 85.0 85.0 85.0 85.0
         100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
      </constant>
<constant name="gppwm4_pin">"NONE"</constant>
<constant digits="0" name="gppwm4_dutyIfError" units="%">0.0</constant>
<constant digits="0" name="gppwm4_pwmFrequency" units="hz">250.0</constant>
<constant digits="0" name="gppwm4_onAboveDuty" units="%">60.0</constant>
<constant digits="0" name="gppwm4_offBelowDuty" units="%">50.0</constant>
<constant name="gppwm4_loadAxis">"TPS"</constant>
<constant digits="0" name="gppwm4_alignmentFill_map" units="unit">0.0</constant>
<constant cols="1" digits="0" name="gppwm4_loadBins" rows="8" units="load">
         0.0
         14.0
         28.0
         42.0
         57.0
         71.0
         85.0
         100.0
      </constant>
<constant cols="1" digits="0" name="gppwm4_rpmBins" rows="8" units="RPM">
         0.0
         1000.0
         2000.0
         3000.0
         4000.0
         5000.0
         6000.0
         7000.0
      </constant>
<constant cols="8" digits="0" name="gppwm4_table" rows="8" units="duty">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         14.0 14.0 14.0 14.0 14.0 14.0 14.0 14.0
         28.0 28.0 28.0 28.0 28.0 28.0 28.0 28.0
         42.0 42.0 42.0 42.0 42.0 42.0 42.0 42.0
         57.0 57.0 57.0 57.0 57.0 57.0 57.0 57.0
         71.0 71.0 71.0 71.0 71.0 71.0 71.0 71.0
         85.0 85.0 85.0 85.0 85.0 85.0 85.0 85.0
         100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
      </constant>
<constant digits="0" name="mc33_i_boost" units="mA">0.0</constant>
<constant digits="0" name="mc33_i_peak" units="mA">0.0</constant>
<constant digits="0" name="mc33_i_hold" units="mA">0.0</constant>
<constant digits="0" name="mc33_t_max_boost" units="us">0.0</constant>
<constant digits="0" name="mc33_t_peak_off" units="us">0.0</constant>
<constant digits="0" name="mc33_t_peak_tot" units="us">0.0</constant>
<constant digits="0" name="mc33_t_bypass" units="us">0.0</constant>
<constant digits="0" name="mc33_t_hold_off" units="us">0.0</constant>
<constant digits="0" name="mc33_t_hold_tot" units="us">0.0</constant>
<constant name="tcuUpshiftButtonPinMode">"DEFAULT"</constant>
<constant name="tcuDownshiftButtonPinMode">"DEFAULT"</constant>
<constant name="acSwitchMode">"DEFAULT"</constant>
<constant name="tcu_solenoid_mode1">"default"</constant>
<constant name="tcu_solenoid_mode2">"default"</constant>
<constant name="tcu_solenoid_mode3">"default"</constant>
<constant name="tcu_solenoid_mode4">"default"</constant>
<constant name="tcu_solenoid_mode5">"default"</constant>
<constant name="tcu_solenoid_mode6">"default"</constant>
<constant cols="1" digits="1" name="knockBaseNoise" rows="16" units="dB">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant digits="0" name="alignmentFill_at_4007" units="units">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom1" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom2" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom3" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom4" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom5" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom6" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom7" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom8" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom9" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom10" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom11" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom12" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom13" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom14" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom15" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom16" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom17" units="from">0.0</constant>
<constant digits="2" name="triggerGapOverrideFrom18" units="from">0.0</constant>
<constant digits="2" name="fuelTrim1" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim2" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim3" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim4" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim5" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim6" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim7" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim8" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim9" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim10" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim11" units="Percent">0.0</constant>
<constant digits="2" name="fuelTrim12" units="Percent">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo1" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo2" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo3" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo4" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo5" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo6" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo7" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo8" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo9" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo10" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo11" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo12" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo13" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo14" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo15" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo16" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo17" units="to">0.0</constant>
<constant digits="2" name="triggerGapOverrideTo18" units="to">0.0</constant>
<constant digits="0" name="hpfpCamLobes" units="lobes/cam">0.0</constant>
<constant name="hpfpCam">"NONE"</constant>
<constant digits="0" name="hpfpPeakPos" units="deg">0.0</constant>
<constant digits="0" name="hpfpMinAngle" units="deg">0.0</constant>
<constant digits="3" name="hpfpPumpVolume" units="cc">0.0</constant>
<constant digits="0" name="hpfpActivationAngle" units="deg">0.0</constant>
<constant digits="0" name="issFilterReciprocal">0.0</constant>
<constant digits="3" name="hpfpPidP" units="%/kPa">0.0</constant>
<constant digits="5" name="hpfpPidI" units="%/kPa/lobe">0.0</constant>
<constant digits="0" name="hpfpTargetDecay" units="kPa/s">0.0</constant>
<constant cols="1" digits="1" name="hpfpLobeProfileQuantityBins" rows="16" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="1" name="hpfpLobeProfileAngle" rows="16" units="deg">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="hpfpDeadtimeVoltsBins" rows="8" units="volts">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="3" name="hpfpDeadtimeMS" rows="8" units="ms">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="10" digits="0" name="hpfpTarget" rows="10" units="kPa">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="1" name="hpfpTargetLoadBins" rows="10" units="load">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="hpfpTargetRpmBins" rows="10" units="RPM">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="10" digits="0" name="hpfpCompensation" rows="10" units="%">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="3" name="hpfpCompensationLoadBins" rows="10" units="cc/lobe">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="hpfpCompensationRpmBins" rows="10" units="RPM">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="unusedTpsBins" rows="24" units="TPS">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="stepper_raw_output1">"NONE"</constant>
<constant name="stepper_raw_output2">"NONE"</constant>
<constant name="stepper_raw_output3">"NONE"</constant>
<constant name="stepper_raw_output4">"NONE"</constant>
<constant digits="2" name="gearRatio1" units="ratio">0.0</constant>
<constant digits="2" name="gearRatio2" units="ratio">0.0</constant>
<constant digits="2" name="gearRatio3" units="ratio">0.0</constant>
<constant digits="2" name="gearRatio4" units="ratio">0.0</constant>
<constant digits="2" name="gearRatio5" units="ratio">0.0</constant>
<constant digits="2" name="gearRatio6" units="ratio">0.0</constant>
<constant digits="2" name="gearRatio7" units="ratio">0.0</constant>
<constant digits="2" name="gearRatio8" units="ratio">0.0</constant>
<constant digits="0" name="vvtActivationDelayMs" units="ms">0.0</constant>
<constant digits="0" name="unusedShort" units="RPM">0.0</constant>
<constant cols="1" digits="0" name="wwCltBins" rows="8" units="deg C">
         -40.0
         -20.0
         0.0
         20.0
         40.0
         60.0
         80.0
         100.0
      </constant>
<constant cols="1" digits="2" name="wwTauCltValues" rows="8">
         1.45
         1.3
         1.17
         1.05
         0.9
         0.82
         0.75
         0.7
      </constant>
<constant cols="1" digits="2" name="wwBetaCltValues" rows="8">
         0.73
         0.66
         0.57
         0.46
         0.38
         0.31
         0.24
         0.19
      </constant>
<constant cols="1" digits="0" name="wwMapBins" rows="8" units="kPa">
         10.0
         20.0
         30.0
         40.0
         50.0
         60.0
         70.0
         80.0
      </constant>
<constant cols="1" digits="2" name="wwTauMapValues" rows="8">
         0.38
         0.55
         0.69
         0.86
         0.9
         0.95
         0.97
         1.0
      </constant>
<constant cols="1" digits="2" name="wwBetaMapValues" rows="8">
         0.21
         0.4
         0.6
         0.79
         0.85
         0.9
         0.95
         1.0
      </constant>
<constant cols="6" digits="0" name="torqueTable" rows="6" units="Nm">
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="torqueRpmBins" rows="6" units="RPM">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="torqueLoadBins" rows="6" units="Load">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="gearControllerMode">"None"</constant>
<constant name="transmissionControllerMode">"None"</constant>
<constant name="auxLinear1_hwChannel">"NONE"</constant>
<constant cols="1" digits="0" name="auxLinear1_alignmentFill" rows="3" units="unit">
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="auxLinear1_v1" units="volts">0.0</constant>
<constant digits="2" name="auxLinear1_value1" units="kPa">0.0</constant>
<constant digits="2" name="auxLinear1_v2" units="volts">0.0</constant>
<constant digits="2" name="auxLinear1_value2" units="kPa">0.0</constant>
<constant name="auxLinear2_hwChannel">"NONE"</constant>
<constant cols="1" digits="0" name="auxLinear2_alignmentFill" rows="3" units="unit">
         0.0
         0.0
         0.0
      </constant>
<constant digits="2" name="auxLinear2_v1" units="volts">0.0</constant>
<constant digits="2" name="auxLinear2_value1" units="kPa">0.0</constant>
<constant digits="2" name="auxLinear2_v2" units="volts">0.0</constant>
<constant digits="2" name="auxLinear2_value2" units="kPa">0.0</constant>
<constant name="tcu_tcc_onoff_solenoid">"NONE"</constant>
<constant name="tcu_tcc_onoff_solenoid_mode">"default"</constant>
<constant name="tcu_tcc_pwm_solenoid">"NONE"</constant>
<constant name="tcu_tcc_pwm_solenoid_mode">"default"</constant>
<constant digits="0" name="tcu_tcc_pwm_solenoid_freq" units="Hz">0.0</constant>
<constant name="tcu_pc_solenoid_pin">"NONE"</constant>
<constant name="tcu_pc_solenoid_pin_mode">"default"</constant>
<constant digits="0" name="tcu_pc_solenoid_freq" units="Hz">0.0</constant>
<constant name="tcu_32_solenoid_pin">"NONE"</constant>
<constant name="tcu_32_solenoid_pin_mode">"default"</constant>
<constant digits="0" name="tcu_32_solenoid_freq" units="Hz">0.0</constant>
<constant cols="1" digits="0" name="mainUnusedEnd" rows="222" units="units">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant name="warning_message"/>
<constant cols="1" digits="0" name="afterstartCoolantBins" rows="8" units="C">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="1" name="afterstartHoldTime" rows="8" units="Seconds">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="1" name="afterstartEnrich" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="1" name="afterstartDecayTime" rows="8" units="Seconds">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="8" digits="1" name="boostTableOpenLoop" rows="8">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         14.0 14.0 14.0 14.0 14.0 14.0 14.0 14.0
         28.0 28.0 28.0 28.0 28.0 28.0 28.0 28.0
         42.0 42.0 42.0 42.0 42.0 42.0 42.0 42.0
         58.0 58.0 58.0 58.0 58.0 58.0 58.0 58.0
         72.0 72.0 72.0 72.0 72.0 72.0 72.0 72.0
         86.0 86.0 86.0 86.0 86.0 86.0 86.0 86.0
         100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
      </constant>
<constant cols="1" digits="0" name="boostRpmBins" rows="8" units="RPM">
         0.0
         1150.0
         2300.0
         3450.0
         4550.0
         5700.0
         6850.0
         8000.0
      </constant>
<constant cols="8" digits="0" name="boostTableClosedLoop" rows="8">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         14.0 14.0 14.0 14.0 14.0 14.0 14.0 14.0
         28.0 28.0 28.0 28.0 28.0 28.0 28.0 28.0
         42.0 42.0 42.0 42.0 42.0 42.0 42.0 42.0
         58.0 58.0 58.0 58.0 58.0 58.0 58.0 58.0
         72.0 72.0 72.0 72.0 72.0 72.0 72.0 72.0
         86.0 86.0 86.0 86.0 86.0 86.0 86.0 86.0
         100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
      </constant>
<constant cols="1" digits="0" name="boostTpsBins" rows="8" units="%">
         0.0
         14.0
         28.0
         42.0
         58.0
         72.0
         86.0
         100.0
      </constant>
<constant cols="8" digits="0" name="pedalToTpsTable" rows="8" units="%">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0
         3.0 3.0 4.0 4.0 4.0 5.0 6.0 7.0
         6.0 7.0 8.0 8.0 8.0 10.0 11.0 14.0
         8.0 14.0 16.0 16.0 18.0 20.0 21.0 24.0
         8.0 23.0 28.0 32.0 34.0 36.0 38.0 40.0
         8.0 26.0 28.0 32.0 46.0 55.0 58.0 58.0
         8.0 26.0 28.0 32.0 46.0 79.0 100.0 100.0
      </constant>
<constant cols="1" digits="0" name="pedalToTpsPedalBins" rows="8" units="%">
         0.0
         8.0
         16.0
         24.0
         40.0
         56.0
         78.0
         100.0
      </constant>
<constant cols="1" digits="0" name="pedalToTpsRpmBins" rows="8" units="RPM">
         1000.0
         1400.0
         1800.0
         2200.0
         2600.0
         3600.0
         5200.0
         8000.0
      </constant>
<constant cols="1" digits="2" name="cltCrankingCorrBins" rows="8" units="C">
         -40.0
         -20.0
         0.0
         20.0
         40.0
         60.0
         80.0
         200.0
      </constant>
<constant cols="1" digits="2" name="cltCrankingCorr" rows="8" units="%">
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
      </constant>
<constant cols="1" digits="0" name="idleAdvanceBins" rows="8" units="RPM">
         0.0
         700.0
         750.0
         850.0
         950.0
         1050.0
         1100.0
         1500.0
      </constant>
<constant cols="1" digits="1" name="idleAdvance" rows="8" units="deg">
         16.0
         16.0
         14.0
         12.0
         9.0
         7.0
         5.0
         5.0
      </constant>
<constant cols="1" digits="0" name="idleVeRpmBins" rows="4" units="RPM">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="idleVeLoadBins" rows="4" units="load">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="4" digits="1" name="idleVeTable" rows="4" units="%">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant name="luaScript"/>
<constant cols="1" digits="2" name="cltFuelCorrBins" rows="16" units="C">
         -40.0
         -30.0
         -20.0
         -10.0
         0.0
         10.0
         20.0
         30.0
         40.0
         50.0
         60.0
         70.0
         80.0
         90.0
         100.0
         200.0
      </constant>
<constant cols="1" digits="2" name="cltFuelCorr" rows="16" units="ratio">
         1.5
         1.5
         1.4199982
         1.3600006
         1.2799988
         1.1900024
         1.1200027
         1.0999985
         1.0599976
         1.0599976
         1.0299988
         1.0100021
         1.0
         1.0
         1.0
         1.0
      </constant>
<constant cols="1" digits="2" name="iatFuelCorrBins" rows="16" units="C">
         -40.0
         -30.0
         -20.0
         -10.0
         0.0
         10.0
         20.0
         30.0
         40.0
         50.0
         60.0
         70.0
         80.0
         90.0
         100.0
         110.0
      </constant>
<constant cols="1" digits="2" name="iatFuelCorr" rows="16" units="ratio">
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
         1.0
      </constant>
<constant cols="1" digits="2" name="crankingFuelCoef" rows="8" units="ratio">
         2.7999878
         2.2000122
         1.800003
         1.5
         1.2699966
         1.0899963
         1.0
         1.0
      </constant>
<constant cols="1" digits="2" name="crankingFuelBins" rows="8" units="C">
         -20.0
         -10.0
         5.0
         30.0
         43.930176
         52.609863
         65.0
         90.0
      </constant>
<constant cols="1" digits="2" name="crankingCycleCoef" rows="8" units="ratio">
         1.5
         1.3499985
         1.050003
         0.75
         0.5
         0.5
         0.5
         0.5
      </constant>
<constant cols="1" digits="0" name="crankingCycleBins" rows="8" units="counter">
         4.0
         8.0
         12.0
         16.0
         74.0
         75.0
         76.0
         77.0
      </constant>
<constant cols="1" digits="2" name="cltIdleCorrBins" rows="16" units="C">
         -40.0
         -30.0
         -20.0
         -10.0
         0.0
         10.0
         20.98999
         31.02002
         39.79004
         50.0
         65.69043
         70.0
         79.46
         90.0
         100.0
         200.0
      </constant>
<constant cols="1" digits="2" name="cltIdleCorr" rows="16" units="ratio">
         1.7799988
         1.7799988
         1.6132965
         1.6132965
         1.6132965
         1.6100006
         1.6100006
         1.6100006
         1.6100006
         1.4533005
         0.82
         0.75
         0.64
         0.45
         0.45
         0.45
      </constant>
<constant cols="1" digits="2" name="mafDecoding" rows="256" units="kg/hour">
         -34.5
         -6.0
         10.5
         105.299805
         387.5
         738.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
         200.0
      </constant>
<constant cols="1" digits="2" name="mafDecodingBins" rows="256" units="V">
         0.0
         0.78125
         1.3867188
         2.9101562
         4.2578125
         4.9804688
         16.0
         17.0
         18.0
         19.0
         20.0
         21.0
         22.0
         23.0
         24.0
         25.0
         26.0
         27.0
         28.0
         29.0
         30.0
         31.0
         32.0
         33.0
         34.0
         35.0
         36.0
         37.0
         38.0
         39.0
         40.0
         41.0
         42.0
         43.0
         44.0
         45.0
         46.0
         47.0
         48.0
         49.0
         50.0
         51.0
         52.0
         53.0
         54.0
         55.0
         56.0
         57.0
         58.0
         59.0
         60.0
         61.0
         62.0
         63.0
         64.0
         65.0
         66.0
         67.0
         68.0
         69.0
         70.0
         71.0
         72.0
         73.0
         74.0
         75.0
         76.0
         77.0
         78.0
         79.0
         80.0
         81.0
         82.0
         83.0
         84.0
         85.0
         86.0
         87.0
         88.0
         89.0
         90.0
         91.0
         92.0
         93.0
         94.0
         95.0
         96.0
         97.0
         98.0
         99.0
         100.0
         101.0
         102.0
         103.0
         104.0
         105.0
         106.0
         107.0
         108.0
         109.0
         110.0
         111.0
         112.0
         113.0
         114.0
         115.0
         116.0
         117.0
         118.0
         119.0
         120.0
         121.0
         122.0
         123.0
         124.0
         125.0
         126.0
         127.0
         128.0
         129.0
         130.0
         131.0
         132.0
         133.0
         134.0
         135.0
         136.0
         137.0
         138.0
         139.0
         140.0
         141.0
         142.0
         143.0
         144.0
         145.0
         146.0
         147.0
         148.0
         149.0
         150.0
         151.0
         152.0
         153.0
         154.0
         155.0
         156.0
         157.0
         158.0
         159.0
         160.0
         161.0
         162.0
         163.0
         164.0
         165.0
         166.0
         167.0
         168.0
         169.0
         170.0
         171.0
         172.0
         173.0
         174.0
         175.0
         176.0
         177.0
         178.0
         179.0
         180.0
         181.0
         182.0
         183.0
         184.0
         185.0
         186.0
         187.0
         188.0
         189.0
         190.0
         191.0
         192.0
         193.0
         194.0
         195.0
         196.0
         197.0
         198.0
         199.0
         200.0
         201.0
         202.0
         203.0
         204.0
         205.0
         206.0
         207.0
         208.0
         209.0
         210.0
         211.0
         212.0
         213.0
         214.0
         215.0
         216.0
         217.0
         218.0
         219.0
         220.0
         221.0
         222.0
         223.0
         224.0
         225.0
         226.0
         227.0
         228.0
         229.0
         230.0
         231.0
         232.0
         233.0
         234.0
         235.0
         236.0
         237.0
         238.0
         239.0
         240.0
         241.0
         242.0
         243.0
         244.0
         245.0
         246.0
         247.0
         248.0
         249.0
         250.0
         251.0
         252.0
         253.0
         254.0
         255.0
         256.0
         257.0
         258.0
         259.0
         260.0
         261.0
         262.0
         263.0
         264.0
         265.0
      </constant>
<constant cols="16" digits="1" name="ignitionIatCorrTable" rows="16" units="deg">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="ignitionIatCorrLoadBins" rows="16" units="Temperature">
         -40.0
         -30.0
         -20.0
         -10.0
         0.0
         10.0
         20.0
         30.0
         40.0
         50.0
         60.0
         70.0
         80.0
         90.0
         100.0
         110.0
      </constant>
<constant cols="1" digits="0" name="ignitionIatCorrRpmBins" rows="16" units="RPM">
         880.0
         1260.0
         1640.0
         2020.0
         2400.0
         2780.0
         3000.0
         3380.0
         3760.0
         4140.0
         4520.0
         5000.0
         5700.0
         6500.0
         7200.0
         8000.0
      </constant>
<constant cols="16" digits="0" name="injectionPhase" rows="16" units="deg">
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
         -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0 -180.0
      </constant>
<constant cols="1" digits="0" name="injPhaseLoadBins" rows="16" units="Load">
         10.0
         20.0
         30.0
         40.0
         50.0
         60.0
         70.0
         80.0
         90.0
         100.0
         110.0
         120.0
         130.0
         140.0
         150.0
         160.0
      </constant>
<constant cols="1" digits="0" name="injPhaseRpmBins" rows="16" units="RPM">
         650.0
         800.0
         1100.0
         1400.0
         1700.0
         2000.0
         2300.0
         2600.0
         2900.0
         3200.0
         3500.0
         3800.0
         4100.0
         4400.0
         4700.0
         7000.0
      </constant>
<constant cols="6" digits="0" name="tcuSolenoidTable" rows="10" units="onoff">
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant digits="0" name="unused17440">0.0</constant>
<constant cols="16" digits="2" name="mapEstimateTable" rows="16" units="kPa">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="1" name="mapEstimateTpsBins" rows="16" units="% TPS">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="mapEstimateRpmBins" rows="16" units="RPM">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="8" digits="0" name="vvtTable1" rows="8" units="value">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="vvtTable1LoadBins" rows="8" units="L">
         0.0
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
         7.0
      </constant>
<constant cols="1" digits="0" name="vvtTable1RpmBins" rows="8" units="RPM">
         0.0
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
         7.0
      </constant>
<constant cols="8" digits="0" name="vvtTable2" rows="8" units="value">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="vvtTable2LoadBins" rows="8" units="L">
         0.0
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
         7.0
      </constant>
<constant cols="1" digits="0" name="vvtTable2RpmBins" rows="8" units="RPM">
         0.0
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
         7.0
      </constant>
<constant cols="16" digits="1" name="ignitionTable" rows="16" units="deg">
         10.0 10.0 24.0 38.0 38.0 38.2 38.3 38.3 38.3 38.2 40.0 32.2 32.2 32.2 32.2 32.2
         10.0 10.0 24.0 38.0 38.0 39.0 39.3 39.3 39.3 39.0 40.0 33.0 33.0 33.0 33.0 33.0
         10.0 10.0 24.0 38.0 38.0 38.0 39.0 39.0 39.0 39.0 40.0 35.0 35.0 35.0 35.0 35.0
         18.0 17.0 24.0 38.0 38.0 38.0 39.0 39.0 39.0 39.0 40.0 35.0 35.0 35.0 35.0 35.0
         18.0 17.0 23.0 37.0 38.0 38.0 39.0 39.0 39.0 39.0 40.0 35.0 35.0 35.0 35.0 35.0
         18.0 17.0 23.0 34.0 36.0 38.0 39.0 39.0 39.0 39.0 40.0 35.0 35.0 35.0 35.0 35.0
         17.0 17.0 22.0 34.0 35.7 37.7 38.0 38.0 38.0 38.0 38.0 34.0 34.0 34.0 34.0 34.0
         16.0 17.0 22.0 29.0 35.0 37.0 38.0 38.0 38.0 38.0 38.0 34.0 34.0 34.0 34.0 34.0
         16.0 18.0 21.0 25.0 26.0 32.0 32.0 32.0 34.0 34.0 34.0 30.0 30.0 30.0 30.0 30.0
         16.0 18.0 19.0 22.0 24.0 27.0 28.0 29.0 29.0 29.0 29.0 30.0 30.0 30.0 30.0 30.0
         16.0 18.0 20.0 20.0 22.0 24.0 23.0 26.0 28.0 28.0 28.0 28.0 28.0 28.0 30.0 30.0
         16.0 18.0 21.0 19.0 21.0 23.0 22.0 27.0 23.0 23.0 23.0 25.0 25.0 25.0 26.0 26.0
         16.0 18.0 21.0 23.0 23.0 22.0 20.0 24.0 23.0 23.0 23.0 23.0 25.0 25.0 26.0 26.0
         16.0 18.0 21.0 25.0 25.0 22.0 23.0 25.0 22.0 19.0 21.0 22.0 22.0 22.0 23.0 23.0
         16.0 18.0 21.0 25.0 25.0 22.0 23.0 25.0 22.0 19.0 21.0 22.0 22.0 22.0 23.0 23.0
         16.0 18.0 21.0 25.0 25.0 22.0 23.0 25.0 22.0 19.0 21.0 22.0 22.0 22.0 23.0 23.0
      </constant>
<constant cols="1" digits="0" name="ignitionLoadBins" rows="16" units="Load">
         0.0
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
         8.0
         12.0
         16.0
         22.0
         30.0
         40.0
         60.0
         80.0
         100.0
      </constant>
<constant cols="1" digits="0" name="ignitionRpmBins" rows="16" units="RPM">
         1200.0
         1600.0
         2100.0
         2500.0
         2900.0
         3300.0
         3600.0
         3800.0
         4000.0
         4300.0
         4600.0
         5000.0
         5400.0
         6000.0
         6800.0
         7500.0
      </constant>
<constant cols="16" digits="1" name="veTable" rows="16" units="%">
         16.0 16.0 16.0 18.0 18.0 18.0 18.0 18.0 18.0 18.2 16.0 15.3 18.5 20.8 34.2 34.3
         16.0 16.0 16.0 18.0 18.0 18.0 18.0 18.0 18.0 20.3 20.1 18.5 21.1 25.9 34.1 34.3
         16.0 16.0 16.0 18.0 18.0 18.0 18.0 18.0 18.0 24.4 23.4 23.5 25.6 27.7 34.1 34.3
         16.0 16.0 16.0 18.0 18.0 18.0 18.0 18.0 18.0 28.4 29.3 33.8 31.5 34.3 34.3 34.3
         40.5 38.1 35.5 36.2 42.3 37.0 35.2 35.7 32.2 32.8 30.4 34.8 35.4 32.7 34.3 34.3
         41.1 39.9 35.8 38.6 44.2 40.3 39.0 38.0 34.6 34.5 33.4 36.2 37.1 34.4 36.7 38.1
         41.6 41.6 36.0 40.9 46.0 43.5 42.7 40.2 37.0 36.1 36.3 37.5 38.7 36.0 39.1 41.9
         46.2 44.1 41.4 41.2 48.8 48.1 47.6 43.9 39.4 41.9 44.0 42.2 38.1 37.8 42.1 45.9
         57.3 50.2 44.3 44.8 51.8 49.1 48.4 47.6 46.5 47.3 48.4 46.0 37.4 39.2 41.5 45.5
         53.0 56.4 48.6 51.4 56.5 57.8 54.8 51.1 51.2 52.4 52.9 50.2 37.8 37.5 40.5 45.5
         52.8 53.5 49.7 55.6 62.1 63.0 61.7 55.9 55.8 59.3 64.3 58.6 46.1 41.4 44.0 50.4
         54.6 47.6 44.8 61.1 68.1 69.4 67.4 64.9 65.9 69.6 74.5 70.5 67.9 61.9 59.8 58.7
         53.9 49.7 44.6 62.2 69.2 70.8 69.0 64.7 70.0 77.6 82.8 85.0 87.2 81.5 77.2 76.2
         54.3 48.2 43.6 61.0 70.1 67.7 66.6 65.8 71.1 79.9 87.9 92.0 94.5 96.4 95.0 92.4
         55.8 45.3 43.0 59.8 67.3 67.3 63.6 67.8 71.3 80.1 84.9 93.0 99.9 100.8 102.6 99.3
         57.7 45.7 43.6 64.8 72.7 69.3 63.7 63.6 68.6 77.4 86.9 94.8 98.6 99.3 102.7 98.6
      </constant>
<constant cols="1" digits="0" name="veLoadBins" rows="16" units="kPa">
         0.0
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
         8.0
         12.0
         16.0
         22.0
         30.0
         40.0
         60.0
         80.0
         102.0
      </constant>
<constant cols="1" digits="0" name="veRpmBins" rows="16" units="RPM">
         1200.0
         1600.0
         2100.0
         2500.0
         2900.0
         3300.0
         3600.0
         3800.0
         4000.0
         4300.0
         4600.0
         5000.0
         5400.0
         6000.0
         6800.0
         7500.0
      </constant>
<constant cols="16" digits="1" name="lambdaTable" rows="16" units="afr">
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 14.0 14.3 15.0 15.2 15.2 15.2 15.2 15.2
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.9 14.1 14.6 14.7 14.7 14.7 14.7 14.7
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.5 13.4 13.4 13.4 13.4 13.4 13.4 13.4
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.3 13.0 13.0 13.0 13.0 13.0 13.0 13.0
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.3 13.0 13.0 13.0 13.0 13.0 13.0 13.0
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.3 13.0 13.0 13.0 13.0 13.0 13.0 13.0
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.3 13.0 13.0 13.0 13.0 13.0 13.0 13.0
         13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.6 13.3 13.0 13.0 13.0 13.0 13.0 13.0 13.0
      </constant>
<constant cols="1" digits="0" name="lambdaLoadBins" rows="16">
         1.0
         2.0
         3.0
         4.0
         5.0
         6.0
         10.0
         20.0
         30.0
         40.0
         50.0
         60.0
         70.0
         80.0
         90.0
         100.0
      </constant>
<constant cols="1" digits="0" name="lambdaRpmBins" rows="16" units="RPM">
         1000.0
         1300.0
         1600.0
         1800.0
         2000.0
         2200.0
         2400.0
         2600.0
         2800.0
         3000.0
         3400.0
         3800.0
         4200.0
         5000.0
         6000.0
         7600.0
      </constant>
<constant cols="8" digits="2" name="tpsTpsAccelTable" rows="8" units="value">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         10.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         17.0 10.0 0.0 0.0 0.0 0.0 0.0 0.0
         23.0 17.0 10.0 0.0 0.0 0.0 0.0 0.0
         28.0 23.0 17.0 10.0 0.0 0.0 0.0 0.0
         32.0 28.0 23.0 17.0 10.0 0.0 0.0 0.0
         35.0 32.0 28.0 23.0 17.0 10.0 0.0 0.0
         37.0 35.0 32.0 28.0 23.0 17.0 10.0 0.0
      </constant>
<constant cols="1" digits="2" name="tpsTpsAccelFromRpmBins" rows="8" units="from">
         0.0
         10.0
         30.0
         40.0
         60.0
         70.0
         90.0
         100.0
      </constant>
<constant cols="1" digits="2" name="tpsTpsAccelToRpmBins" rows="8" units="to">
         0.0
         10.0
         30.0
         40.0
         60.0
         70.0
         90.0
         100.0
      </constant>
<constant cols="8" digits="2" name="scriptTable1" rows="8" units="value">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="scriptTable1LoadBins" rows="8" units="L">
         20.0
         30.0
         50.0
         60.0
         80.0
         90.0
         110.0
         120.0
      </constant>
<constant cols="1" digits="0" name="scriptTable1RpmBins" rows="8" units="RPM">
         650.0
         800.0
         1700.0
         2600.0
         3500.0
         4400.0
         5300.0
         7000.0
      </constant>
<constant cols="8" digits="0" name="scriptTable2" rows="8" units="value">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="scriptTable2LoadBins" rows="8" units="L">
         20.0
         30.0
         50.0
         60.0
         80.0
         90.0
         110.0
         120.0
      </constant>
<constant cols="1" digits="0" name="scriptTable2RpmBins" rows="8" units="RPM">
         650.0
         800.0
         1700.0
         2600.0
         3500.0
         4400.0
         5300.0
         7000.0
      </constant>
<constant cols="8" digits="0" name="scriptTable3" rows="8" units="value">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="scriptTable3LoadBins" rows="8" units="L">
         20.0
         30.0
         50.0
         60.0
         80.0
         90.0
         110.0
         120.0
      </constant>
<constant cols="1" digits="0" name="scriptTable3RpmBins" rows="8" units="RPM">
         650.0
         800.0
         1700.0
         2600.0
         3500.0
         4400.0
         5300.0
         7000.0
      </constant>
<constant cols="8" digits="0" name="scriptTable4" rows="8" units="value">
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="scriptTable4LoadBins" rows="8" units="L">
         20.0
         30.0
         50.0
         60.0
         80.0
         90.0
         110.0
         120.0
      </constant>
<constant cols="1" digits="0" name="scriptTable4RpmBins" rows="8" units="RPM">
         650.0
         800.0
         1700.0
         2600.0
         3500.0
         4400.0
         5300.0
         7000.0
      </constant>
<constant cols="1" digits="0" name="ignTrimLoadBins" rows="4">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="ignTrimRpmBins" rows="4" units="rpm">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims1_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims2_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims3_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims4_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims5_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims6_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims7_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims8_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims9_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims10_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims11_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="ignTrims12_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="0" name="fuelTrimLoadBins" rows="4">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="fuelTrimRpmBins" rows="4" units="rpm">
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims1_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims2_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims3_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims4_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims5_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims6_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims7_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims8_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims9_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims10_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims11_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="4" digits="1" name="fuelTrims12_table" rows="4">
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
         0.0 0.0 0.0 0.0
      </constant>
<constant cols="1" digits="2" name="crankingFuelCoefE100" rows="8" units="ratio">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="2" name="tcu_pcAirmassBins" rows="8" units="Airmass">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcValsR" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcValsN" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals1" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals2" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals3" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals4" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals12" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals23" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals34" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals21" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals32" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_pcVals43" rows="8" units="%">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_tccTpsBins" rows="8" units="TPS">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_tccLockSpeed" rows="8" units="MPH">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
<constant cols="1" digits="0" name="tcu_tccUnlockSpeed" rows="8" units="MPH">
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
         0.0
      </constant>
</page>
<settings Comment="These setting are only used if this msq is opened without a project.">
<setting name="AFR" value="AFR"/>
</settings>
<userComments Comment="These are user comments that can be related to a particular setting or dialog.">
<userComment name="isInjectionEnabled" value="Primary: 280 158 209&#10;Secondary: 280 158 290"/>
</userComments>
</msq>
`;
