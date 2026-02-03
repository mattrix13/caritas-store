export async function sendToTelegram(formData) {
  const TELEGRAM_BOT_TOKEN = '8254065771:AAHj6vD4GMWWZd52gQ2V5_sIXBG0T27GZRs'
  const TELEGRAM_CHAT_ID = '6087732511'
  
  const message = `
🎯 НОВАЯ ЗАЯВКА С CARITAS

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📞 Телефон: ${formData.phone}

📦 Детали заказа:
${formData.orderDetails}

💬 Сообщение:
${formData.message}

🕒 Время: ${new Date().toLocaleString()}
  `
  
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      }
    )
    
    return await response.json()
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    throw error
  }
}