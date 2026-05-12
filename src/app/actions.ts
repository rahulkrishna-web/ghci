'use server'

export async function subscribeToNewsletter(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  if (!email || !name) {
    return { success: false, error: 'Name and email are required' };
  }

  // Split name into first and last name
  const nameParts = name.trim().split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error('BREVO_API_KEY is not defined in environment variables');
    return { success: false, error: 'Server configuration error' };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName
        },
        listIds: [15],
        updateEnabled: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return { success: false, error: errorData.message || 'Failed to subscribe' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error subscribing:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
