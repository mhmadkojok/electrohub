import { useState } from 'react'

const allProducts = [
  {
    id: 1, name: 'Arduino Uno R3 Starter Kit', category: 'Kits',
    price: 39.99, emoji: '🔌', badge: 'Best Seller',
    desc: 'Complete starter kit with Arduino Uno, breadboard, LEDs, resistors, and 30+ components.'
  },
  {
    id: 2, name: 'Raspberry Pi 4 Bundle', category: 'Kits',
    price: 89.99, emoji: '🖥️', badge: 'Popular',
    desc: 'Raspberry Pi 4 Model B 4GB with power supply, case, and 32GB SD card preloaded.'
  },
  {
    id: 3, name: 'DHT22 Temperature & Humidity', category: 'Sensors',
    price: 8.99, emoji: '🌡️', badge: null,
    desc: 'High precision digital temperature and humidity sensor. 3.3–6V operating voltage.'
  },
  {
    id: 4, name: 'HC-SR04 Ultrasonic Sensor', category: 'Sensors',
    price: 5.49, emoji: '📡', badge: null,
    desc: 'Measures distances from 2cm to 400cm with high accuracy. Ideal for robotics projects.'
  },
  {
    id: 5, name: 'L298N Motor Driver Module', category: 'Modules',
    price: 6.99, emoji: '⚙️', badge: null,
    desc: 'Dual H-Bridge motor driver. Controls two DC motors or one stepper motor.'
  },
  {
    id: 6, name: 'ESP8266 WiFi Module', category: 'Modules',
    price: 7.49, emoji: '📶', badge: 'New',
    desc: 'Compact 802.11 b/g/n WiFi module with built-in TCP/IP stack for IoT projects.'
  },
  {
    id: 7, name: 'SG90 Servo Motor Pack (5x)', category: 'Motors',
    price: 14.99, emoji: '🔄', badge: null,
    desc: 'Pack of 5 mini servo motors. 180° rotation, 4.8–6V, ideal for robotics and drones.'
  },
  {
    id: 8, name: 'NEMA 17 Stepper Motor', category: 'Motors',
    price: 22.99, emoji: '🔩', badge: null,
    desc: 'High torque bipolar stepper motor used in 3D printers and CNC machines.'
  },
  {
    id: 9, name: '400-Point Breadboard (3-Pack)', category: 'Tools',
    price: 9.99, emoji: '🧩', badge: null,
    desc: 'Solderless breadboards with 400 tie points each. Color-coded bus strips.'
  },
  {
    id: 10, name: 'Precision Soldering Iron Kit', category: 'Tools',
    price: 34.99, emoji: '🔥', badge: 'Sale',
    desc: 'Temperature-adjustable soldering iron with stand, tips, solder wire, and case.'
  },
  {
    id: 11, name: 'OLED Display 0.96" (I2C)', category: 'Modules',
    price: 7.99, emoji: '📺', badge: null,
    desc: '128×64 OLED display module. SSD1306 driver, I2C interface. Works with Arduino & Pi.'
  },
  {
    id: 12, name: 'Advanced Robotics Mega Kit', category: 'Kits',
    price: 129.99, emoji: '🤖', badge: 'Pro',
    desc: 'Everything to build your own robot: chassis, motors, sensors, controller, and more.'
  },
]

const categories = ['All', 'Kits', 'Sensors', 'Modules', 'Motors', 'Tools']

function Products({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [addedIds, setAddedIds] = useState([])

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  const handleAdd = (id) => {
    addToCart()
    setAddedIds(prev => [...prev, id])
    setTimeout(() => {
      setAddedIds(prev => prev.filter(i => i !== id))
    }, 1500)
  }

  return (
    <main className="products-page">
      <div className="container">
        <div className="products-header">
          <div className="section-tag">Our Catalog</div>
          <h1 className="section-title">Electronic <span>Components</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Premium quality parts for every project — from beginner kits to advanced modules.
          </p>
        </div>

        <div className="categories-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-img">
                {product.emoji}
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>
              <div className="product-body">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button
                    className={`add-cart-btn ${addedIds.includes(product.id) ? 'added' : ''}`}
                    onClick={() => handleAdd(product.id)}
                  >
                    {addedIds.includes(product.id) ? '✓ Added' : '+ Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Products
