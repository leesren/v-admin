export const actuator = {
  'GET /actuator/metrics/system.cpu.count': {
    name: 'system.cpu.count',
    description: 'The number of processors available to the Java virtual machine',
    baseUnit: null,
    measurements: [{ statistic: 'VALUE', value: 4.0 }],
    availableTags: []
  },
  'GET /actuator/metrics/system.cpu.usage': {
    name: 'system.cpu.usage',
    description: 'The "recent cpu usage" for the whole system',
    baseUnit: null,
    measurements: [{ statistic: 'VALUE', value: 0.3661559171714772 }],
    availableTags: []
  },
  'GET /actuator/metrics/process.start.time': {
    name: 'process.start.time',
    description: 'Start time of the process since unix epoch.',
    baseUnit: 'seconds',
    measurements: [{ statistic: 'VALUE', value: 1.578237239675e9 }],
    availableTags: []
  },
  'GET /actuator/metrics/process.uptime': {
    name: 'process.uptime',
    description: 'The uptime of the Java virtual machine',
    baseUnit: 'seconds',
    measurements: [{ statistic: 'VALUE', value: 139562.581 }],
    availableTags: []
  },
  'GET /actuator/metrics/process.cpu.usage': {
    name: 'process.cpu.usage',
    description: 'The "recent cpu usage" for the Java Virtual Machine process',
    baseUnit: null,
    measurements: [{ statistic: 'VALUE', value: 0.08832377996643126 }],
    availableTags: []
  }
}
