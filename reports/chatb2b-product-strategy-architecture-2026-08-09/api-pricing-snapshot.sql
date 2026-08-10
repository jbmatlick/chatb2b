-- Reproducible transcription of official OpenAI standard short-context API
-- prices reviewed on 2026-08-09. Prices are USD per 1M tokens.
-- Source: https://developers.openai.com/api/docs/pricing
WITH prices(model, input_per_million, output_per_million) AS (
  VALUES
    ('GPT-5.6 Luna', 0.20, 1.20),
    ('GPT-5.6 Terra', 2.00, 12.00),
    ('GPT-5.6 Sol', 5.00, 30.00)
),
long_form AS (
  SELECT model, 'Input' AS token_type, input_per_million AS usd_per_million,
    input_per_million, output_per_million
  FROM prices
  UNION ALL
  SELECT model, 'Output', output_per_million,
    input_per_million, output_per_million
  FROM prices
)
SELECT model, token_type, usd_per_million,
  input_per_million, output_per_million
FROM long_form
ORDER BY model, token_type;
