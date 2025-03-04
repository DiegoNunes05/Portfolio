module.exports = {
  extends: [
    'next/core-web-vitals',
    // Outras extensões que você possa ter
  ],
  rules: {
    // Desativar os avisos de aspas simples, se preferir
    'react/no-unescaped-entities': 'off',
    
    // Desativar o aviso para usar <Image> do Next.js, se necessário
    '@next/next/no-img-element': 'off',
    
    // Desativar temporariamente o aviso de variáveis não utilizadas
    '@typescript-eslint/no-unused-vars': ['warn', { 
      'varsIgnorePattern': '^_', 
      'argsIgnorePattern': '^_' 
    }]
  }
};