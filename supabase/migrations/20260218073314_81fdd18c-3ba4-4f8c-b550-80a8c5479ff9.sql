
CREATE TABLE public.suggestions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.suggestions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a suggestion
CREATE POLICY "Anyone can submit suggestions"
ON public.suggestions
FOR INSERT
WITH CHECK (true);

-- Anyone can read suggestions (for the admin page)
CREATE POLICY "Admin can read suggestions"
ON public.suggestions
FOR SELECT
USING (true);
