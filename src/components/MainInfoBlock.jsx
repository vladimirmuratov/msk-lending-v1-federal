import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{ color: 'var(--main-color)', marginBottom: '20px', fontSize: { xs: '22px', sm: '34px' }, fontWeight: 500 }}>
                Приоритетное медицинское обслуживание: качество и комфорт в федеральных и ведомственных клиниках
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Добро пожаловать в <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> – ваш ключ к
                премиальной заботе о здоровье! Здесь не только столичные
                жители, но пациенты из всех уголков России и стран СНГ получают исключительные возможности. Мы
                гарантируем безупречность условий госпитализации: удобство и безопасность в каждом шаге.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп:</Box>
                <br />
                – Организация транспортировки из регионов и стран СНГ прямо в нужное медицинское учреждение.
                – Встреча с иногородними пациентами на вокзалах или в аэропорту, включая сопровождение
                специализированной скорой помощи.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Выбор платного лечения в федеральных и ведомственных клиниках – это не просто высокий уровень медицины,
                а целая система преимуществ:
                <br />
                - Сокращенные сроки без ожидания очередей.
                <br />
                - Возможность персонального выбора ведущих специалистов.
                <br />
                - Современное диагностическое оборудование и передовые методы лечения.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Мы обеспечиваем не только медицинскую поддержку высочайшего класса, но и индивидуальный подход к каждому
                пациенту. Ваше пребывание в клинике будет комфортным, а забота о здоровье – профессиональной и надежной.
                В <Box component="span" sx={{ fontWeight: 600,  color: 'var(--main-color)', }}>МСК-Групп</Box> вы получаете уверенность в лучшем лечении!
                <br />
                <br />
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>Непрерывно. Быстро реагируем. Доступность без
                    границ</Box>
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Коллектив экспертов высшего класса
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Наш медицинский отряд – это элита врачей и сестринского персонала с непрерывным профессиональным
                    ростом, что обеспечивает доступ к лучшим специалистам страны.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Передовые технологии
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Применяем новейшие достижения в медицине и оборудование по мировым стандартам для точной диагностики
                    и эффективного лечения, гарантируя оптимальные результаты.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Персонализированное лечение
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Учитывая уникальность каждого пациента, разрабатываем индивидуальные стратегии терапии с акцентом на
                    ваши личные потребности и состояние здоровья. Ваше благополучие – наш приоритет номер один.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Палаты для комфорта
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Создаем идеальную атмосферу восстановления: уютные, оборудованные палаты обеспечивают все
                    необходимое для вашего спокойствия и скорейшего выздоровления.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Круговая забота о пациенте
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    От момента поступления до выписки – полный спектр медицинской помощи включает реабилитацию и
                    последующее наблюдение, гарантируя непрерывную поддержку.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Организация госпитализации без хлопот
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Помогаем с организацией лечения из любого уголка России и СНГ: от консультаций до транспортировки –
                    ваш путь к здоровью будет максимально упрощен.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Финансовая ясность
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Прозрачная система оплаты, включая финансовую поддержку при планировании расходов на лечение.
                </Typography>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Выбирая <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box>, вы выбираете непрерывную заботу
                о своем здоровье и долголетии. Мы – ваш надежный
                спутник в пути к полноценной жизни, где бы вы ни находились.
            </Typography>
        </Box>
    );
};
