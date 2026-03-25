import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, whatsapp, observacoes } = body;

    // Validação básica
    if (!nome || !email || !whatsapp) {
      return NextResponse.json(
        { success: false, message: 'Nome, email e WhatsApp são obrigatórios' },
        { status: 400 }
      );
    }

    // Chamar Lambda via API Gateway
    const apiUrl = process.env.API_GATEWAY_URL || 'https://jyjbkau75b.execute-api.us-east-2.amazonaws.com/leads';
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nome,
        contact: email,
        whatsapp: whatsapp,
        observations: observacoes || '',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao processar cadastro');
    }

    return NextResponse.json({
      success: true,
      message: 'Cadastro realizado com sucesso! Você receberá um email de confirmação.',
    });

  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao processar cadastro. Tente novamente.' },
      { status: 500 }
    );
  }
}
