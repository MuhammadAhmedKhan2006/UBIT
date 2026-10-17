-- 06 SEED (app mock data)
-- Run last. ON CONFLICT DO NOTHING so it is safe to re-run.

INSERT INTO public.system_config (key, value) VALUES
  ('alert_level', '"warning"'::JSONB),
  ('hazard_countdown_seconds', '13330'::JSONB),
  ('simulation_state', '{
    "boatsDown": 3,
    "trucksDown": 1,
    "heatwave": true,
    "meshDown": true,
    "noise": true,
    "roadClosed": false,
    "boatBroken": false,
    "rainMm": 140,
    "ran": false,
    "comparing": false
  }'::JSONB),
  ('resident_sim', '{
    "name": "Rashid Ali",
    "phone": "+92 300 8492011",
    "phoneType": "basic",
    "language": "ur",
    "flags": ["Elderly household"]
  }'::JSONB)
ON CONFLICT (key) DO NOTHING;

INSERT INTO public.cases (
  id, name, name_urdu, gender, age, location, location_text, location_text_urdu,
  area, landmark, tier, risk, status, vulnerability, vulnerability_urdu,
  vulnerability_flags, unknown_data, household_size, preferred_language,
  phone_type, exposure_score, vulnerability_score, time_urgency_score, confidence_score,
  last_contact_at
) VALUES
  ('PK-KHI-7821', 'Fatima Bibi', 'فاطمہ بی بی', 'female', 78,
   ST_SetSRID(ST_MakePoint(66.9905, 24.8615), 4326),
   'Lyari Sector 4-B, Gul Muhammad Lane', 'لیاری سیکٹر ۴-بی، گل محمد لین',
   'lyari', 'Gul Muhammad Lane', 1, 98.4, 'pending',
   'Bedridden / Respiratory Support', 'معذور / آکسیجن سپورٹ',
   '["elderly_solitary","bedridden","oxygen_dependent"]'::JSONB,
   false, 1, 'ur', 'none', 94, 99, 97, 96,
   NOW() - INTERVAL '2 hours 45 minutes'),
  ('PK-KHI-7822', 'Bilal Ahmed', 'بلال احمد', 'male', 65,
   ST_SetSRID(ST_MakePoint(66.9952, 24.8641), 4326),
   'Lyari Sector 5, Mirza Adam Khan Road', 'لیاری سیکٹر ۵، مرزا آدم خان روڈ',
   'lyari', 'Mirza Adam Khan Road', 1, 82.1, 'pending',
   'Elderly / Diabetic', 'بزرگ / ذیابیطس',
   '["elderly","diabetic"]'::JSONB,
   false, 3, 'ur', 'basic', 80, 78, 70, 88,
   NOW() - INTERVAL '40 minutes'),
  ('PK-KHI-7823', 'Mrs. Tahira Khan', 'طاہرہ خان', 'female', 54,
   ST_SetSRID(ST_MakePoint(67.1204, 24.8376), 4326),
   'Korangi Sector 31, Block C', 'کورنگی سیکٹر ۳۱، بلاک سی',
   'korangi', 'Block C', 2, 71.3, 'pending',
   'Mobility Impaired', 'حرکت میں رکاوٹ',
   '["mobility_impaired"]'::JSONB,
   true, 2, 'ur', 'none', 72, 81, 60, 61,
   NULL),
  ('PK-KHI-7824', 'Zubair Hassan', 'زبیر حسن', 'male', 71,
   ST_SetSRID(ST_MakePoint(67.1950, 24.8930), 4326),
   'Malir Colony, Street 7', 'ملیر کالونی، گلی ۷',
   'malir', 'Street 7', 2, 64.0, 'pending',
   'Visually Impaired', 'بصارت سے محروم',
   '["visually_impaired"]'::JSONB,
   false, 2, 'ur', 'basic', 66, 70, 55, 79,
   NOW() - INTERVAL '90 minutes'),
  ('PK-KHI-7825', 'Khurram Javed', 'خرم جاوید', 'male', 46,
   ST_SetSRID(ST_MakePoint(66.9880, 24.8588), 4326),
   'Lyari Sector 4, Moosa Lane', 'لیاری سیکٹر ۴، موسیٰ لین',
   'lyari', 'Moosa Lane', 2, 58.5, 'pending',
   'Family of six / no phone', 'چھ افراد / فون نہیں',
   '["no_phone","female_headed"]'::JSONB,
   true, 6, 'ur', 'none', 70, 55, 50, 54,
   NULL)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.cases (
  id, name, name_urdu, gender, age, location, location_text, location_text_urdu,
  area, tier, risk, status, vulnerability, vulnerability_flags, household_size, preferred_language
) VALUES
  ('PK-HYD-1101', 'Ghulam Rasool', 'غلام رسول', 'male', 82,
   ST_SetSRID(ST_MakePoint(68.3578, 25.3810), 4326),
   'Latifabad Unit 7, House 112', 'لطیف آباد یونٹ ۷، مکان ۱۱۲',
   'other', 2, 74.2, 'pending', 'Elderly / Heat exhaustion',
   '["elderly","heat_exhaustion"]'::JSONB, 1, 'ur'),
  ('PK-HYD-1102', 'Sakina Mai', 'سکینہ مائی', 'female', 69,
   ST_SetSRID(ST_MakePoint(68.3260, 25.4005), 4326),
   'Qasimabad Phase 2, Lane 4', 'قاسم آباد فیز ۲، گلی ۴',
   'other', 3, 52.6, 'pending', 'Lives alone',
   '["elderly_solitary"]'::JSONB, 1, 'ur'),
  ('PK-HYD-1103', 'Baby of Nasreen', 'نسرین کا بچہ', 'unknown', 1,
   ST_SetSRID(ST_MakePoint(68.3680, 25.3922), 4326),
   'Hirabad, Block B', 'ہیرآباد، بلاک بی',
   'other', 2, 68.9, 'pending', 'Infant / Dehydration',
   '["infant","dehydration"]'::JSONB, 3, 'ur'),
  ('PK-THT-2201', 'Haji Ismail', 'حاجی اسماعیل', 'male', 74,
   ST_SetSRID(ST_MakePoint(67.4500, 24.1440), 4326),
   'Keti Bandar, Jetty Road', 'کیٹی بندر، جیٹی روڈ',
   'other', 1, 93.5, 'pending', 'Paralysed / Coastal',
   '["paralysed","coastal"]'::JSONB, 2, 'ur'),
  ('PK-THT-2202', 'Mehrunnisa', 'مہر النساء', 'female', 31,
   ST_SetSRID(ST_MakePoint(67.5360, 24.1630), 4326),
   'Shah Bandar, Village 3', 'شاہ بندر، گاؤں ۳',
   'other', 1, 88.0, 'pending', 'Pregnant (8 months)',
   '["pregnant"]'::JSONB, 4, 'ur'),
  ('PK-THT-2203', 'Dilawar Mallah', 'دلاور ملاح', 'male', 58,
   ST_SetSRID(ST_MakePoint(67.4485, 24.1462), 4326),
   'Keti Bandar, Boat Basin', 'کیٹی بندر، کشتی گھاٹ',
   'other', 2, 70.4, 'pending', 'Boat-dependent family',
   '["boat_dependent"]'::JSONB, 5, 'ur')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.assets (id, name, name_urdu, type, capacity, available, special_equipment) VALUES
  ('IB-04', 'Inflatable Heavy Boat 04', 'بھاری ربڑ کی کشتی ۰۴', 'boat', 8, true, '["stretcher","winch"]'::JSONB),
  ('AMB-12', 'Edhi 4x4 Amb #12', 'ایدھی ایمبولینس ۱۲', 'ambulance', 2, true, '["oxygen_generator","stretcher"]'::JSONB),
  ('SC-D2', 'Scout Squad D-2', 'اسکاؤٹ دستہ ڈی-۲', 'team', 4, true, '[]'::JSONB),
  ('IB-07', 'Rescue Inflatable 07', 'ریسکیو کشتی ۰۷', 'boat', 6, true, '[]'::JSONB),
  ('SC-E1', 'Scout Squad E-1', 'اسکاؤٹ دستہ ای-۱', 'team', 4, true, '[]'::JSONB)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.assignments (id, case_id, case_name, asset_id, asset, asset_label, status, pinned, eta_minutes) VALUES
  ('asg-1', 'PK-KHI-7821', 'Fatima Bibi', 'IB-04', 'boat', 'Inflatable Heavy Boat 04', 'queued', false, 12),
  ('asg-2', 'PK-KHI-7822', 'Bilal Ahmed', 'AMB-12', 'ambulance', 'Edhi 4x4 Amb #12', 'queued', false, 18),
  ('asg-3', 'PK-KHI-7823', 'Mrs. Tahira Khan', 'SC-D2', 'team', 'Scout Squad D-2', 'queued', false, 24),
  ('asg-4', 'PK-KHI-7824', 'Zubair Hassan', 'IB-07', 'boat', 'Rescue Inflatable 07', 'queued', false, 21),
  ('asg-5', 'PK-KHI-7825', 'Khurram Javed', 'SC-E1', 'team', 'Scout Squad E-1', 'queued', false, 32)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.audit_log (id, action_type, action_text, user_name, user_role, case_id, reason, timestamp) VALUES
  ('a1', 'accept', 'Case accepted for dispatch', 'Zara Khan', 'coordinator', 'PK-KHI-7820', NULL, NOW() - INTERVAL '45 minutes'),
  ('a2', 'override', 'Override: Deprioritised due to resource constraints', 'Zara Khan', 'coordinator', 'PK-KHI-7819',
   'All boats deployed to Tier 1 emergencies', NOW() - INTERVAL '2 hours')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.intake_queue (id, channel, channel_label, raw_message, snippet, risk, processed) VALUES
  ('in-1', 'whatsapp', 'WhatsApp', 'Malir Nadi pul doob gaya hai, 4 bachay chat par...', 'Boat needed, 4 children on rooftop', 96.8, false),
  ('in-2', 'mesh', 'Mesh Voice', 'Korangi Sector 2: Dialysis patient water entered 2 feet...', 'Dialysis patient, water in house', 91.2, false),
  ('in-3', 'pdma_1129', '1129 PDMA', 'Keamari: Boat required for pregnant lady in labor...', 'Pregnant lady in labor, boat needed', 99.1, false),
  ('in-4', 'sms', 'SMS Cell-Mesh', 'Gulshan block 13: Solar power backup working, need food packs', 'Needs food, power OK', 48.0, false)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.sync_queue (id, title, description, status, progress, local_time, priority, operation_type) VALUES
  ('s1', 'Status Update: Fatima Bibi', 'Volunteer reached doorstep; verified water level 1.1m; request boat stretcher urgently.', 'queued', 0, '15:22 PKT', 1, 'case_update'),
  ('s2', 'Buddy Check-in: Zubaida Begum', 'Marked: Needs Help (Infant ORS requested); Photo attached (340 KB).', 'syncing', 64, '15:08 PKT', 2, 'buddy_checkin'),
  ('s3', 'Road Closure: Gul Muhammad', 'Marked impassable due to live downed electric cable in flood water.', 'queued', 0, '15:28 PKT', 3, 'hazard_report'),
  ('s4', 'Check-in: Chacha Rustam', 'Marked: Safe / محفوظ', 'synced', 100, '14:48 PKT', 4, 'buddy_checkin')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.notifications (id, audience_role, text, text_urdu, type, related_case_id, read) VALUES
  ('n1', 'coordinator', 'Tier 1 alert: Fatima Bibi – no response 2h 45m', 'درجہ اول الرٹ: فاطمہ بی بی — ۲ گھنٹے ۴۵ منٹ سے کوئی جواب نہیں', 'alert', 'PK-KHI-7821', false),
  ('n2', 'coordinator', 'Water level +2.1m at Lyari Nadi sensor LK-91', 'لیاری ندی سینسر LK-91 پر پانی +۲.۱ میٹر', 'warning', NULL, false),
  ('n3', 'coordinator', 'Boat Unit 04 dispatched to Sector 4-B', 'کشتی یونٹ ۰۴ سیکٹر ۴-بی روانہ', 'info', 'PK-KHI-7821', false)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.shelters (
  id, kind, name, name_urdu, host, host_urdu, type, location, area, area_urdu,
  capacity, occupied, amenities, verified, phone, note, note_urdu
) VALUES
  ('cs-1', 'community', 'Masjid-e-Bilal Hall', 'مسجدِ بلال ہال', 'Imam Abdul Rehman', 'امام عبدالرحمن', 'mosque',
   ST_SetSRID(ST_MakePoint(66.9912, 24.8622), 4326), 'Lyari Sector 4', 'لیاری سیکٹر ۴',
   120, 74, '["water","food","women","accessible"]'::JSONB, true, '+92 300 2201144',
   'Separate women section on first floor. Ground-floor ramp.', 'پہلی منزل پر خواتین کا الگ حصہ۔ گراؤنڈ فلور پر ریمپ۔'),
  ('cs-2', 'community', 'Govt Girls School Malir', 'گورنمنٹ گرلز اسکول ملیر', 'Principal Nasreen Akhtar', 'پرنسپل نسرین اختر', 'school',
   ST_SetSRID(ST_MakePoint(67.1988, 24.8944), 4326), 'Malir Colony', 'ملیر کالونی',
   200, 88, '["water","power","medical","women"]'::JSONB, true, '+92 321 7788120',
   'Solar backup and a lady health visitor on site.', 'سولر بیک اپ اور لیڈی ہیلتھ وزیٹر موجود۔'),
  ('cs-3', 'community', 'Rafiq Family Courtyard', 'رفیق خاندان کا صحن', 'Rafiq Ahmed', 'رفیق احمد', 'home',
   ST_SetSRID(ST_MakePoint(67.1180, 24.8360), 4326), 'Korangi Sector 31', 'کورنگی سیکٹر ۳۱',
   14, 8, '["water","food","pets"]'::JSONB, false, '+92 333 4410982',
   'Upper floor dry. Can host two families with small children.', 'بالائی منزل خشک۔ چھوٹے بچوں والے دو خاندان ٹھہر سکتے ہیں۔'),
  ('cs-4', 'community', 'Al-Khidmat Community Hall', 'الخدمت کمیونٹی ہال', 'Al-Khidmat volunteers', 'الخدمت رضاکار', 'hall',
   ST_SetSRID(ST_MakePoint(66.9790, 24.8110), 4326), 'Keamari', 'کیماڑی',
   160, 160, '["water","food","medical","power","accessible"]'::JSONB, true, '+92 345 9087761',
   'Full at the moment. Waiting list open.', 'اس وقت بھر چکا ہے۔ انتظار کی فہرست کھلی ہے۔'),
  ('cs-5', 'community', 'Jamia Noor-ul-Huda', 'جامعہ نور الہدیٰ', 'Maulana Yusuf', 'مولانا یوسف', 'madrassa',
   ST_SetSRID(ST_MakePoint(67.0910, 24.9180), 4326), 'Gulshan-e-Iqbal Block 13', 'گلشنِ اقبال بلاک ۱۳',
   90, 52, '["water","food","power"]'::JSONB, true, '+92 302 5543012',
   'Men and boys only. Women can be sent to the nearby school.', 'صرف مرد اور لڑکے۔ خواتین کو قریبی اسکول بھیجا جا سکتا ہے۔'),
  ('cs-6', 'community', 'Bhittai Welfare Trust Centre', 'بھٹائی ویلفیئر ٹرسٹ سینٹر', 'Shazia Memon', 'شازیہ میمن', 'hall',
   ST_SetSRID(ST_MakePoint(67.3620, 24.8600), 4326), 'Gulshan-e-Hadeed', 'گلشنِ حدید',
   70, 41, '["women","medical","water","accessible"]'::JSONB, true, '+92 311 6620045',
   'Midwife on call. Priority for pregnant women and infants.', 'دائی کال پر موجود۔ حاملہ خواتین اور شیر خوار بچوں کو ترجیح۔'),
  ('cs-7', 'community', 'Saleem Bhai Rooftop Room', 'سلیم بھائی کا چھت والا کمرہ', 'Saleem Qureshi', 'سلیم قریشی', 'home',
   ST_SetSRID(ST_MakePoint(66.9940, 24.8635), 4326), 'Lyari Sector 5', 'لیاری سیکٹر ۵',
   8, 5, '["water","pets"]'::JSONB, false, '+92 336 1209984',
   'Rooftop room with tarpaulin. Boat access from Gul Muhammad Lane.', 'ترپال والا چھت کا کمرہ۔ گل محمد لین سے کشتی کا راستہ۔')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.shelters (
  id, kind, name, name_urdu, host, host_urdu, type, location, area, area_urdu,
  capacity, occupied, amenities, verified, phone, elevation_m, zone, facility_status,
  beds_capacity, beds_occupied, women_capacity, women_occupied, medical_capacity, medical_occupied, oxygen_units,
  supplies
) VALUES
  ('sh-khi-04', 'official', 'Govt Boys Degree College', 'گورنمنٹ ڈگری کالج، لیاری',
   'Tariq Mansoor', 'طارق منصور', 'school',
   ST_SetSRID(ST_MakePoint(66.9920, 24.8608), 4326), 'Lyari Sector 4, Karachi', 'لیاری سیکٹر ۴، کراچی',
   400, 342, '["water","food","medical","power","accessible","women"]'::JSONB, true, '+92 345 2200114',
   5.8, 'Zone 03 Hub', 'active',
   328, 310, 150, 140, 16, 14, 2,
   '{"rations": true, "solar": true}'::JSONB)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.field_tasks (id, case_id, assignment_id, title, status, eta_minutes, sort_order) VALUES
  ('ft-1', 'PK-KHI-7821', 'asg-1', 'Evacuate Fatima Bibi', 'queued', 8, 1),
  ('ft-2', 'PK-KHI-7822', 'asg-2', 'Welfare check Bilal Ahmed', 'queued', 18, 2)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.buddy_households (id, name, name_urdu, location_text, location_text_urdu, flags, phone_type, last_outcome, notes) VALUES
  ('bh-1', 'Chacha Rustam', 'چاچا رستم', 'Lyari Sector 4', 'لیاری سیکٹر ۴', ARRAY['elderly'], 'none', 'safe', 'Has battery AM radio, no mobile phone.'),
  ('bh-2', 'Zubaida Begum', 'زبیدہ بیگم', 'Lyari Sector 4-B', 'لیاری سیکٹر ۴-بی', ARRAY['infant','postnatal'], 'none', 'needs_help', 'Infant ORS requested.'),
  ('bh-3', 'Unnamed elder A', 'بزرگ الف', 'Lyari Sector 5', 'لیاری سیکٹر ۵', ARRAY['hearing','sight'], 'none', 'pending', NULL),
  ('bh-4', 'Unnamed elder B', 'بزرگ ب', 'Lyari Sector 5', 'لیاری سیکٹر ۵', ARRAY['hearing','sight'], 'none', 'pending', NULL)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.hazard_sensors (id, name, area, location, metric, reading) VALUES
  ('LK-91', 'Lyari Nadi sensor LK-91', 'lyari',
   ST_SetSRID(ST_MakePoint(66.9890, 24.8595), 4326), 'water_level_m', 2.1)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.timeline (id, case_id, event_text, event_text_urdu, event_type) VALUES
  ('t-seed-1', 'PK-KHI-7821', 'Case opened from community registry', 'کیس کمیونٹی رجسٹری سے کھلا', 'status_change'),
  ('t-seed-2', 'PK-KHI-7821', 'No response after SMS + IVR (2h 45m)', 'ایس ایم ایس اور آئی وی آر کے بعد کوئی جواب نہیں', 'contact')
ON CONFLICT (id) DO NOTHING;

-- Create these in Authentication → Users (not SQL):
--  zara.khan@emergency.sindh.gov.pk             coordinator
--  bilal.field@volunteer.sindh.org              volunteer
--  amina.b@community.sindh.gov.pk               registrar
--  tariq.shelter@relief.sindh.gov.pk            shelter
--  f.malik@audit.un-relief.org                  viewer
