package web.controller;

import core.service.PodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import web.converter.PodConverter;
import web.dto.PodDto;

import java.util.List;

@RestController
public class PodController {
    @Autowired
    PodService service;
    @Autowired
    PodConverter converter;



}
