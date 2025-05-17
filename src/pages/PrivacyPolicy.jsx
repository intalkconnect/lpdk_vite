import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px", color: "#333", lineHeight: 1.6 }}>
      <h1 style={{ color: "#111" }}>Política de Privacidade</h1>

      <p>
        Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações
        ao utilizar nosso aplicativo ou site. Ao acessar nossos serviços, você concorda com esta
        política.
      </p>

      <h2 style={{ color: "#111" }}>1. Informações que coletamos</h2>
      <ul>
        <li>Informações fornecidas por você, como nome, e-mail ou telefone.</li>
        <li>Mensagens trocadas via WhatsApp Business, se aplicável.</li>
        <li>Dados de navegação como IP, tipo de navegador e páginas acessadas.</li>
      </ul>

      <h2 style={{ color: "#111" }}>2. Como usamos suas informações</h2>
      <ul>
        <li>Para prestar suporte e melhorar nossos serviços.</li>
        <li>Para responder a mensagens enviadas por meio de nossos canais oficiais.</li>
        <li>Para fins de análise e melhoria da experiência do usuário.</li>
      </ul>

      <h2 style={{ color: "#111" }}>3. Compartilhamento de dados</h2>
      <p>
        Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para
        o funcionamento do serviço (ex: parceiros de API, hospedagem ou exigência legal).
      </p>

      <h2 style={{ color: "#111" }}>4. Segurança</h2>
      <p>
        Adotamos medidas de segurança adequadas para proteger seus dados contra acessos não
        autorizados, alteração ou divulgação.
      </p>

      <h2 style={{ color: "#111" }}>5. Seus direitos</h2>
      <p>
        Você pode solicitar a exclusão ou correção de seus dados a qualquer momento, entrando em
        contato conosco pelos canais disponíveis.
      </p>

      <h2 style={{ color: "#111" }}>6. Alterações nesta política</h2>
      <p>
        Podemos atualizar esta política de tempos em tempos. Publicaremos todas as alterações nesta
        página.
      </p>

      <h2 style={{ color: "#111" }}>7. Contato</h2>
      <p>
        Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em:{" "}
        <a href="mailto:contato@dkdevs.com" style={{ color: "#1a73e8" }}>
          contato@dkdevs.com
        </a>
      </p>

      <p style={{ fontSize: "0.9em", color: "#666" }}>Última atualização: Maio de 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
