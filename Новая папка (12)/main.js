const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

const host = 'ws://broker.emqx.io:8083/mqtt'
console.log('erwr');
const options = {
  keepalive: 60,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
}






console.log('Connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
})

client.on('reconnect', () => {
  console.log('Reconnecting...')
})


// Publish
client.publish('test5599', 'ws connection demo.aaaaaaa..!', { qos: 0, retain: false })


client.on('connect', () => {
    console.log('Client connected:' + clientId)
    // Subscribea
    client.subscribe('testtopic', { qos: 0 })
  })

function fcc() {
    
    let val = document.getElementById("link").value;  // Ты инициализируешь переменную val и присваиваешь ей значение
    console.log(val);
    client.publish('test5599', val, { qos: 0, retain: false })
}