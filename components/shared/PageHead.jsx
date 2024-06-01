import Head from "next/head";
import React from "react";
function PageHead(props) {
    const { title } = props;
    const { metaDes } = props;
    return (
        <Head>
            <title>{title || 'گونش بیلگی سایار سهند'}</title>
            <meta name="description" content={metaDes || `شرکت گونش بیلگی سایار پیشرو در صنعت فناوری اطلاعات، نرم افزار و هوش مصنوعی می باشد`} />
            <link rel="canonical" href="https://guneshco.com/" />
            <meta property="og:locale" content="fa_IR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="شرکت نرم افزاری گونش بیلگی سایار سهند" />
            <meta property="og:description" content="گونش بیلگی سایار سهند ارائه انواع خدمات طراحی و توسعه وب سایت های اختصاصی با تکنولوژی های روز دنیا ایجاد سیستم های هوش مصنوعی برای انواع کسب و کارها ارائه خدمات سئو و تولید محتوا طراحی سایت طراحی انواع سایت های شرکتی، فروشگاهی، شخصی، آموزشی، خبری و&#8230; با آخرین تکنولوژی ها و متدهای روز دنیا [&hellip;]" />
            <meta property="og:url" content="https://guneshco.com/" />
            <meta property="og:site_name" content="شرکت نرم افزاری گونش بیلگی سایار سهند" />
            <script type="application/ld+json" class="yoast-schema-graph">{JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://guneshco.com/","url":"https://guneshco.com/","name":"شرکت نرم افزاری گونش بیلگی سایار سهند","isPartOf":{"@id":"https://guneshco.com/#website"},"about":{"@id":"https://guneshco.com/#organization"},"primaryImageOfPage":{"@id":"https://guneshco.com/#primaryimage"},"image":{"@id":"https://guneshco.com/#primaryimage"},"thumbnailUrl":"https://guneshco.com/wp-content/uploads/2021/12/banner-image-4.jpg","datePublished":"2020-10-29T23:12:12+00:00","dateModified":"2023-02-08T07:13:09+00:00","breadcrumb":{"@id":"https://guneshco.com/#breadcrumb"},"inLanguage":"fa-IR","potentialAction":[{"@type":"ReadAction","target":["https://guneshco.com/"]}]},{"@type":"ImageObject","inLanguage":"fa-IR","@id":"https://guneshco.com/#primaryimage","url":"https://guneshco.com/wp-content/uploads/2021/12/banner-image-4.jpg","contentUrl":"https://guneshco.com/wp-content/uploads/2021/12/banner-image-4.jpg","width":750,"height":650,"caption":"گونش بیلگی سایار سهند"},{"@type":"BreadcrumbList","@id":"https://guneshco.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"خانه"}]},{"@type":"WebSite","@id":"https://guneshco.com/#website","url":"https://guneshco.com/","name":"شرکت نرم افزاری گونش بیلگی سایار سهند","description":"","publisher":{"@id":"https://guneshco.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://guneshco.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"fa-IR"},{"@type":"Organization","@id":"https://guneshco.com/#organization","name":"شرکت گونش بیلگی سایار سهند","url":"https://guneshco.com/","logo":{"@type":"ImageObject","inLanguage":"fa-IR","@id":"https://guneshco.com/#/schema/logo/image/","url":"https://guneshco.com/wp-content/uploads/2020/10/logo-1.png","contentUrl":"https://guneshco.com/wp-content/uploads/2020/10/logo-1.png","width":83,"height":120,"caption":"شرکت گونش بیلگی سایار سهند"},"image":{"@id":"https://guneshco.com/#/schema/logo/image/"}}]})}</script>
            <link rel='dns-prefetch' href='//www.googletagmanager.com' />
            <link rel='dns-prefetch' href='//s.w.org' />
            <link rel="shortcut icon" href="/images/gbs_logo.png" type="image/x-icon" />
        </Head>
    );
}

export default PageHead;